const Wisata = require('../models/wisataModel');

const create = (req, res) => {
  let wisata = new Wisata({
    title: req.body.title,
    image_url: req.body.image_url,
    description: req.body.description,
    category: req.body.category,
  });

  wisata.save()
  .then(success => {
    res.send(success);
  })
  .catch(err => {
    res.status(500).send(err);
  });
};

const findAll = (req, res) => {
  Wisata.find()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
};

const update = (req, res) => {
  Wisata.update(
    {
    _id: req.params.id,
  }, {
    title: req.body.title,
    image_url: req.body.image_url,
    description: req.body.description,
    category: req.body.category,
  })
  .then(success => {
    res.send(success);
  })
  .catch(err => {
    res.status(401).send(err);
  });
};

const remove = (req, res) => {
  Wisata.remove({
    _id: req.params.id,
  })
  .then(success => {
    res.send(success);
  })
  .catch(err => {
    res.status(401).send(err);
  });
};

module.exports = {
  create,
  findAll,
  update,
  remove,
};
