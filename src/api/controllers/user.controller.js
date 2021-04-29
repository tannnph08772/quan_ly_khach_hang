const User = require('../models/user.model');

exports.getAllUser = async(req, res, next) => {
    const allUser = await User.findAll()
    return res.json({ allUser })
}

exports.getProfile = async(req, res, next) => {
    const myProfile = await User.findByPk(req.params.id)
    return res.json({ myProfile })
}

exports.updateProfile = async(req, res, next) => {
    const newProfile = await User.findOne({ where: { id: req.value.params.id } });
    if (!req.file) {
        image = newProfile.image;
    } else {
        image = req.file.path
    }
    newProfile.update({
        image,
        username: req.value.body.username,
        name: req.value.body.username,
        email: req.value.body.email,
        password: req.value.body.password,
        phone: req.value.body.phone,
        address: req.value.body.address,
        birthday: req.value.body.birthday,
        sex: req.value.body.sex,
        province: req.value.body.province,
        demands: req.value.body.demands,
        district: req.value.body.district,
        ward: req.value.body.ward
    })
    return res.send("Updated!")
}

exports.softDeleteUser = async(req, res, next) => {
    await User.destroy({ where: { id: req.value.params.id } });
    res.send('User deleted!')
}

exports.deleteUser = async(req, res, next) => {
    await User.destroy({ where: { id: req.value.params.id }, force: true });
    return res.send("Deleted user!")
}

exports.restoreUser = async(req, res, next) => {
    await User.restore({ where: { id: req.value.params.id } });

    return res.send("User restored !")
}

exports.getSoftDelUser = async(req, res, next) => {
    const allUser = await User.findAll({ paranoid: false })
    return res.json({ allUser })
}

exports.getInfoUserDeleted = async(req, res, next) => {
    const infoUserDeleted = await User.findByPk(req.value.params.id, { paranoid: false })
    return res.json({ infoUserDeleted })
}