const Image = require('../models/image.model');

exports.uploadImage = async(req, res, next) => {
    try {
        const urlImage = await Image.create({
            image_url: req.file.path,
        })
        return res.json(urlImage)
    } catch (error) {
        return res.send(error)
    }
}