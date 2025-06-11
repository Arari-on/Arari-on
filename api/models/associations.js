const User = require('./User');
const Empresa = require('./Empresa');
const Favorito = require('./Favorito');

// Associações User <-> Empresa via Favorito
User.belongsToMany(Empresa, {
    through: Favorito,
    foreignKey: 'userId',
    as: 'favoritos'
});

Empresa.belongsToMany(User, {
    through: Favorito,
    foreignKey: 'empresaId',
    as: 'favoritadoPor'
});

// Relacionamentos diretos com Favorito
User.hasMany(Favorito, { foreignKey: 'userId' });
Empresa.hasMany(Favorito, { foreignKey: 'empresaId' });
Favorito.belongsTo(User, { foreignKey: 'userId' });
Favorito.belongsTo(Empresa, { foreignKey: 'empresaId' });
