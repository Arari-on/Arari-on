const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './ararion.sqlite', // ou outro caminho, se quiser
    logging: false, // opcional: silencia logs SQL no console
})

module.exports = sequelize