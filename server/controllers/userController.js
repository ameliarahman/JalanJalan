const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET

class User {
  static signup(req, res) {
    UserModel.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }).then((user) => {
      res.send(user);
    }).catch((err) => {
      res.send(err);
    });
  }

  static signin(req, res) {
    UserModel.findOne({ username: req.body.username })
      .then(userData => {
        if (bcrypt.compareSync(req.body.password, userData.password)) {
          let payload = {
            id: userData._id,
            name: userData.name,
            username: userData.username,
            email: userData.email
          }
          let token = jwt.sign(payload, key)
          console.log('Sukses login');
          res.status(201).send({ message: 'User has succesfully login', token })
        } else {
          console.log('gagal login');
          res.status(401).send({ message: 'password or username not valid' })
        }
      })
      .catch(err => {
        console.log('belum daftar');
        res.status(500).send(err)
      })
  }

  static getAllDataUser(req, res) {
    UserModel.find()
      .then((dataUsers) => {
        res.send(dataUsers)
      })
      .catch((reason) => {
        res.send(reason)
      })
  }
}


module.exports = User;
