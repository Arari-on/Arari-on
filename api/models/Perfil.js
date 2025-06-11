const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Perfil = sequelize.define('Perfil', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    titulo: {                    // título ou nome do perfil (ex: Psicólogo Lucas)
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {                // descrição do perfil (pode ser vazia)
        type: DataTypes.TEXT,
        allowNull: true,
    },
    imagem: {                   // url da imagem principal / logo
        type: DataTypes.STRING,
        allowNull: true,
    },
    instagram: {                // nome de usuário do Instagram
        type: DataTypes.STRING,
        allowNull: true,
    },
    contato: {                  // telefone ou whatsapp
        type: DataTypes.STRING,
        allowNull: true,
    },
    endereco: {                 // endereço físico
        type: DataTypes.STRING,
        allowNull: true,
    },
    catalogo: {                 // array de imagens do catálogo em formato JSON
        type: DataTypes.JSON,
        allowNull: true,
    },
}, {
    tableName: 'perfis',
    timestamps: false,
});

module.exports = Perfil;
