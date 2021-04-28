const sequelize = require('../../../database/connection');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    username: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    phone: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    demands: {
        type: Sequelize.STRING,
        allowNull: false
    },
    province: {
        type: Sequelize.STRING,
        allowNull: false
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ward: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

eventEmitter.on('clicked', async() => {
    User.beforeCreate(async(user, options) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    });
})
eventEmitter.on('clicked', async() => {
    User.beforeUpdate(async(users, options) => {
        const newPassword = await bcrypt.hash(users.password, 10);
        users.password = newPassword;
    });
})

eventEmitter.emit('clicked')

module.exports = User;