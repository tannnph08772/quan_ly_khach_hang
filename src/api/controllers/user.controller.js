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
    newProfile.update({
        image: req.file.path,
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