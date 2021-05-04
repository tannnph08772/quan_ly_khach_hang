const router = require('express-promise-router')();
const imageController = require('../controllers/image.controller');
const upload = require('../middlewares/uploadImage.middleware');

router.post('/upload', upload.single('image_url'), imageController.uploadImage);

module.exports = router;