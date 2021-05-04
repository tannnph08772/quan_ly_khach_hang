const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');
const { validateBody, validateParam, schemas } = require('../validators/validate');
const checkUser = require('../middlewares/checkUser.middleware');
const filter = require('../middlewares/filter.middleware');

router.post('/update-profile/:id',
    validateParam(schemas.idSchema, 'id'),
    validateBody(schemas.userSchema),
    userController.updateProfile
);
router.get('/profile/:id', checkUser, userController.getProfile);
router.post('/soft-delete/:id', checkUser, userController.softDeleteUser);
router.post('/delete/:id', checkUser, userController.deleteUser);
router.post('/restore/:id', checkUser, userController.restoreUser);
router.get('/infomation/:id', checkUser, userController.getInfoUserDeleted);
router.get('/list-soft-delete', userController.getSoftDelUser);
router.get('/search', filter, userController.search);
router.get('/list-users', userController.getAllUser);

module.exports = router;