const router = require('express').Router();
const User = require('../controllers/userController');

router.post('/signup', User.signup)
router.post('/signin', User.signin)

module.exports = router;
