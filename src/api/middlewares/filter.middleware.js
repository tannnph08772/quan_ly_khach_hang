const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = async(req, res, next) => {
    const params = req.query;
    const options = {};
    if (params.name) options.name = {
        [Op.like]: '%' + params.name + '%'
    };
    if (params.username) options.username = {
        [Op.like]: '%' + params.username + '%'
    };
    if (params.phone) options.phone = {
        [Op.like]: '%' + params.phone + '%'
    };
    if (params.email) options.email = {
        [Op.like]: '%' + params.email + '%'
    };
    if (params.province) options.province = {
        [Op.like]: '%' + params.province + '%'
    };
    if (params.address) options.address = {
        [Op.like]: '%' + params.address + '%'
    };
    req.query = options;

    return next();
}