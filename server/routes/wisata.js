const router = require('express').Router();
const Wisata = require('../controllers/wisataController'),
  uploadImage = require('../helpers/uploadImages')
  Auth = require('../helpers/auth')


router.get('/', Wisata.findAll);
router.post('/', Auth.hasLogin, uploadImage.multer.single('image_url'), uploadImage.sendImage,  Wisata.create);
router.put('/:id', Wisata.update);
router.delete('/:id', Wisata.remove);

module.exports = router;
