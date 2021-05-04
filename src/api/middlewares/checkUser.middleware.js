const User = require('../models/user.model');

const checkUser = async(req, res, next) => {
    req.locals = await User.findOne({ where: { id: req.params.id } });
    if (req.locals) {
        return next();
    }
    return res.json('User not invalid!');
}
module.exports = checkUser;