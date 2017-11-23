const user = require('../models/userModel');

class User {
  static signup(req, res) {
    user.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    }).then((user) => {
      res.send(user);
    }).catch((err) => {
      res.send(err);
    });
  }
}

module.exports = User;
