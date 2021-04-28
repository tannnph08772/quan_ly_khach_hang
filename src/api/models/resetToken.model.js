const sequelize = require('../../../database/connection');
const Sequelize = require('sequelize');

const ResetToken = sequelize.define("reset_tokens", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: true,
        unique: true
    },
    token: Sequelize.STRING(50),
    expiration: Sequelize.DATE,
    used: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = ResetToken;