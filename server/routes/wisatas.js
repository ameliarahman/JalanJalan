const express = require('express'),
    router = express.Router(),
    // Wisata = require('../controllers/wisataController'),
    uploadImage = require('../helpers/uploadImages');

router.post('/',
    uploadImage.multer.single('image_url'),
    uploadImage.sendImage,
    (req, res) => {
        res.send({
            status: 200,
            message: 'Successfully uploaded',
            fileobj: req.file,
            link: req.file.cloudStoragePublicUrl
        })
    });

module.exports = router;


