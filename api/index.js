const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./config/database')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir;
    if (file.fieldname === 'logo') {
      dir = path.join(__dirname, 'logo');
    } else if (file.fieldname === 'imagem') {
      dir = path.join(__dirname, 'imagens');  // <-- pasta nova para imagem principal
    } else {
      dir = path.join(__dirname, 'catalogo');
    }

    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});


const upload = multer({ storage })

// Carrega os modelos
require('./models/User');
require('./models/Empresa');
require('./models/Favorito');

// Define associações depois de carregar todos os modelos
require('./models/associations');

// Agora pode importar os modelos para usar
const User = require('./models/User');
const Empresa = require('./models/Empresa');
const Favorito = require('./models/Favorito');
const Perfil = require('./models/Perfil');


const bcrypt = require('bcrypt')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/imagens', express.static(path.join(__dirname, 'imagens')));
app.use('/catalogo', express.static(path.join(__dirname, 'catalogo')))


app.post('/perfil', upload.fields([
  { name: 'imagem', maxCount: 1 },           // nome do campo para a imagem principal
  { name: 'catalogoImagens', maxCount: 10 }
]), async (req, res) => {
  try {
    const { titulo, descricao, instagram, endereco, contato } = req.body;

    if (!titulo) {
      return res.status(400).json({ message: 'O título do perfil é obrigatório' });
    }

    const imagemFile = req.files['imagem']?.[0];
    const catalogoFiles = req.files['catalogoImagens'] || [];

    // imagem principal é opcional (allowNull: true), mas pode exigir se quiser
    // se quiser obrigar, descomente:
    // if (!imagemFile) {
    //   return res.status(400).json({ message: 'A imagem principal é obrigatória' });
    // }

    const imagemPath = imagemFile ? `/imagens/${imagemFile.filename}` : null;
    const imagensCatalogo = catalogoFiles.map(file => `/catalogo/${file.filename}`);

    const perfil = await Perfil.create({
      titulo,
      descricao,
      instagram,
      contato,
      endereco,
      imagem: imagemPath,
      catalogo: imagensCatalogo,
    });

    res.status(201).json(perfil);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao salvar perfil', error: err.message });
  }
});



// Rota para listar todos os perfis
app.get('/perfis', async (req, res) => {
  try {
    const perfis = await Perfil.findAll();

    // Como catalogoImagens está salvo como array (JSON), se precisar, já está no formato correto
    // Mas caso salve como string JSON, precisa fazer parse
    // Exemplo (caso seja string):
    // perfis.forEach(perfil => {
    //   perfil.catalogoImagens = JSON.parse(perfil.catalogoImagens);
    // });

    res.json(perfis);
  } catch (error) {
    console.error('Erro ao buscar perfis:', error);
    res.status(500).json({ message: 'Erro ao buscar perfis' });
  }
});

// Registro
app.post('/registro', async (req, res) => {
  const { nome, email, senha } = req.body

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Preencha todos os campos' })
  }

  try {
    const existe = await User.findOne({ where: { email } })
    if (existe) return res.status(400).json({ message: 'Email já cadastrado' })

    const hash = await bcrypt.hash(senha, 10)

    const user = await User.create({ nome, email, senha: hash })

    res.status(201).json({ message: 'Usuário criado', userId: user.id })
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor', error: err.message })
  }
})

// Login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ message: 'Preencha todos os campos' })
  }

  try {
    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' })

    const ok = await bcrypt.compare(senha, user.senha)
    if (!ok) return res.status(400).json({ message: 'Senha incorreta' })

    res.json({
      message: `Bem-vindo, ${user.nome}`,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email
      }
    })
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor', error: err.message })
  }
})

// Listar usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await User.findAll({
      attributes: ['id', 'nome', 'email']
    })
    res.json(usuarios)
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor', error: err.message })
  }
})

// Atualizar usuário
app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params
  const { nome, email } = req.body

  if (!nome || !email) {
    return res.status(400).json({ message: 'Preencha todos os campos' })
  }

  try {
    const user = await User.findByPk(id)
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' })

    user.nome = nome
    user.email = email
    await user.save()

    res.json({ message: 'Usuário atualizado', user })
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor', error: err.message })
  }
})

// Listar empresas
app.get('/empresas', async (req, res) => {
  try {
    const empresas = await Empresa.findAll({
      attributes: ['id', 'nome', 'categoria']
    })
    res.json(empresas)
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor', error: err.message })
  }
})

// Registro empresa
app.post('/registro-empresa', async (req, res) => {
  const { nome, email, senha, celular, cpf, cep, rua, categoria, genero } = req.body

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Preencha os campos obrigatórios: nome, email e senha' })
  }

  try {
    const existeEmail = await Empresa.findOne({ where: { email } })
    if (existeEmail) return res.status(400).json({ message: 'Email já cadastrado' })

    if (cpf) {
      const existeCpf = await Empresa.findOne({ where: { cpf } })
      if (existeCpf) return res.status(400).json({ message: 'CPF já cadastrado' })
    }

    const hash = await bcrypt.hash(senha, 10)

    const empresa = await Empresa.create({
      nome,
      email,
      senha: hash,
      celular,
      cpf,
      cep,
      rua,
      categoria,
      genero
    })

    res.status(201).json({ message: 'Empresa registrada com sucesso', empresaId: empresa.id })
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor', error: err.message })
  }
})


app.post('/favoritar', async (req, res) => {
  const { userId, empresaId } = req.body;

  if (!userId || !empresaId) {
    return res.status(400).json({ message: 'userId e empresaId são obrigatórios' });
  }

  try {
    const favoritoExistente = await Favorito.findOne({ where: { userId, empresaId } });

    if (favoritoExistente) {
      // Desfavorita
      await favoritoExistente.destroy();
      return res.json({ message: 'Desfavoritado com sucesso' });
    } else {
      // Favorita
      await Favorito.create({ userId, empresaId });
      return res.status(201).json({ message: 'Favoritado com sucesso' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao favoritar', error: err.message });
  }
});


app.get('/usuarios/:userId/favoritos', async (req, res) => {
  const { userId } = req.params;

  try {
    const favoritos = await Favorito.findAll({
      where: { userId },
      include: [Empresa]
    });

    res.json(favoritos.map(f => f.empresa)); // retorna só os dados da empresa
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar favoritos', error: err.message });
  }
});



// Inicializa o banco de dados e o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor na porta 3000'))
}).catch(err => {
  console.error('Erro ao conectar no banco:', err)
})
