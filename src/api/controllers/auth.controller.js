const User = require('../models/user.model')
const jwt = require('jsonwebtoken');

const encodedToken = (id) => {
    return jwt.sign({
        iss: 'Tan Nguyen',
        sub: id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, process.env.JWT_SECRET)
}

exports.register = async(req, res, next) => {
    try {
        const userCreate = await User.create({
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
        const token = encodedToken(userCreate.id)

        res.setHeader('Authorization', token)
        return res.json(userCreate)
    } catch (error) {
        return res.send(error)
    }
}

exports.forgotPassword = async(req, res, next) => {
    const getUser = await User.findOne({ where: { email: req.body.email } });

    const token = jwt.sign({ id: getUser.id }, process.env.JWT_SECRET, { expiresIn: "10m" });
    const link = `http://localhost:3000/api/auth/reset-password/${getUser.id}/${token}`
    return res.json({ link, token });
}

exports.resetPassword = async(req, res, next) => {
    const getUser = await User.findOne({ where: { id: req.params.id } })
    const { password, passwordConfirm } = req.body;
    try {
        if (password !== passwordConfirm) {
            return res.send('vui lòng nhập đúng mật khẩu!')
        }
        getUser.update({ password })
        return res.json({ payload });
    } catch (error) {
        return res.json(error)
    }
}