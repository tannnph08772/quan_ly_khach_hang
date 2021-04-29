const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');
const { validateBody, validateParam, schemas } = require('../validators/validate');
const upload = require('../middlewares/uploadImage.middleware');

router.post('/update-profile/:id',
    upload.single('image'),
    validateParam(schemas.idSchema, 'id'),
    validateBody(schemas.userSchema),
    userController.updateProfile
);
router.get('/profile/:id', userController.getProfile);
router.post('/soft-delete/:id', validateParam(schemas.idSchema, 'id'), userController.softDeleteUser);
router.post('/delete/:id', validateParam(schemas.idSchema, 'id'), userController.deleteUser);
router.post('/restore/:id', validateParam(schemas.idSchema, 'id'), userController.restoreUser);
router.get('/infomation/:id', validateParam(schemas.idSchema, 'id'), userController.getInfoUserDeleted);
router.get('/list-soft-delete', userController.getSoftDelUser);
router.get('/list-users', userController.getAllUser);

module.exports = router;