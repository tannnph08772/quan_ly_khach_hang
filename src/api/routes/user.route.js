const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');
const { validateBody, validateParam, schemas } = require('../validators/validate');
const upload = require('../middlewares/uploadImage.middleware');

router.post('/update-profile/:id', validateParam(schemas.idSchema, 'id'), validateBody(schemas.userSchema), userController.updateProfile);
router.get('/profile/:id', upload.single('image'), userController.getProfile);

module.exports = router;