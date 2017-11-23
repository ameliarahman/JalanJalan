const Wisata = require('../models/wisataModel');
<<<<<<< HEAD
<<<<<<< HEAD
// uploadImage = require('../helpers/uploadImages');

const createWisata = (req, res, next) => {
    Wisata.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        image_url: req.file.filename
    })
        .then((dataWisata) => {
            res.send({
                data: dataWisata,
                message: "Successfully inserted!"
            })
        })
        .catch((reason) => {
            res.send(reason)
        })
}


module.exports = {
    createWisata
}
=======
=======
// uploadImage = require('../helpers/uploadImages');

// const createWisata = (req, res, next) => {
//     Wisata.create({
//         title: req.body.title,
//         description: req.body.description,
//         category: req.body.category,
//         image_url: req.file.filename
//     })
//         .then((dataWisata) => {
//             res.send({
//                 data: dataWisata,
//                 message: "Successfully inserted!"
//             })
//         })
//         .catch((reason) => {
//             res.send(reason)
//         })
// }
>>>>>>> 692265541497f4607b84e70a0f27525e327e2b8b

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
<<<<<<< HEAD
>>>>>>> 308abc3405645c508806079ff325e24072d74366
=======
>>>>>>> 692265541497f4607b84e70a0f27525e327e2b8b
