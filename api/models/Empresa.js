// models/Empresa.js
const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Empresa = sequelize.define('Empresa', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: true
    }



}, {
    timestamps: false
})
Empresa.associate = (models) => {
    Empresa.hasOne(models.Perfil, {
        foreignKey: 'empresaId',
        onDelete: 'CASCADE',
    });
};
module.exports = Empresa

