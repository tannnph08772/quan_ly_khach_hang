const router = require('express-promise-router')();
const authController = require('../controllers/auth.controller');
const { validateBody, validateParam, schemas } = require('../validators/validate');
const upload = require('../middlewares/uploadImage.middleware');

router.post('/register', upload.single('image'), validateBody(schemas.userSchema), authController.register);

module.exports = router;