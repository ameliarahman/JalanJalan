const router = require('express').Router();
const Wisata = require('../controllers/wisataController');

router.get('/', Wisata.findAll);
router.post('/', Wisata.create);
router.put('/:id', Wisata.update);
router.delete('/:id', Wisata.remove);

module.exports = router;
