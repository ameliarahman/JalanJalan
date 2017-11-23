const Wisata = require('../models/wisataModel');
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