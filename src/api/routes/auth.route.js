const router = require('express-promise-router')();
const authController = require('../controllers/auth.controller');
const { validateBody, validateParam, schemas } = require('../validators/validate');
const authenticate = require('../middlewares/checkAuth.middleware');

router.post('/register', validateBody(schemas.userSchema), authController.register);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:id/:token', authenticate, authController.resetPassword);

module.exports = router;