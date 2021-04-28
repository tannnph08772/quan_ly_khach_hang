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
        const user = await User.create({
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
        const token = encodedToken(user.id)

        res.setHeader('Authorization', token)
        return res.json(user)
    } catch (error) {
        return res.send(error)
    }
}

exports.forgotPassword = async(req, res, next) => {
    var email = await User.findOne({ where: { email: req.body.email } });
    if (email == null) {
        return res.json({ status: 'ok' });
    }

    await ResetToken.update({
        used: 1
    }, {
        where: {
            email: req.body.email
        }
    });

    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1 / 24);

    await ResetToken.create({
        email: req.body.email,
        expiration: expireDate,
        // token: token,
        used: 0
    });


    return res.json({ status: 'ok' });
}