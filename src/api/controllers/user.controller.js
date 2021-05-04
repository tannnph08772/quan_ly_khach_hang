const User = require('../models/user.model');


exports.getAllUser = async(req, res, next) => {
    const allUser = await User.findAll()
    return res.json({ allUser })
}

exports.getProfile = async(req, res, next) => {
    const myProfile = req.locals;
    return res.json({ myProfile })
}

exports.updateProfile = async(req, res, next) => {
    const newProfile = req.locals;

    newProfile.update(
        req.value.body
    )
    return res.send("Updated!")
}

exports.softDeleteUser = async(req, res, next) => {
    req.locals.destroy();
    res.send('User deleted!')
}

exports.deleteUser = async(req, res, next) => {
    await User.destroy({ where: { id: req.params.id }, force: true });
    return res.send("Deleted user!")
}

exports.restoreUser = (req, res, next) => {
    req.locals.restore();

    return res.send("User restored !")
}

exports.getSoftDelUser = async(req, res, next) => {
    const allUser = await User.findAll({ paranoid: false })
    return res.json({ allUser })
}

exports.getInfoUserDeleted = async(req, res, next) => {
    const infoUserDeleted = await User.findByPk(req.params.id, { paranoid: false })
    return res.json({ infoUserDeleted })
}

exports.search = async(req, res, next) => {
    const result = await User.findAll({
        where: req.query
    })
    return res.json({ result })
}