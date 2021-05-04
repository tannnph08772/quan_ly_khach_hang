const sequelize = require('../../../database/connection');
const Sequelize = require('sequelize');

const Image = sequelize.define("images", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    image_url: {
        type: Sequelize.STRING(500),
        allowNull: true,
    }
});

module.exports = Image;