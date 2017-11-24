const router = require('express').Router();
const User = require('../controllers/userController');

router.post('/signup', User.signup)
router.post('/signin', User.signin)
router.get('/', User.getAllDataUser)

module.exports = router;
