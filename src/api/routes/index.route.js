const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const imgRouter = require('./image.route');

function route(app) {
    app.use('/api/user', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/img', imgRouter);
}

module.exports = route;