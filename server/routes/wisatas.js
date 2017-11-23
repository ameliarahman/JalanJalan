const express = require('express'),
    router = express.Router(),
    wisataController = require('../controllers/wisataController'),
    multer = require('multer'),
    upload = multer({
        dest: 'public/images/'
    })


/* GET home page. */
router.post('/', upload.single('image_url'), wisataController.createWisata);

module.exports = router;


