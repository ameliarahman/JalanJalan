const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const wisataSchema = new Schema({
    title: String,
    image_url: String,
    description: String,
    category: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})


const Wisata = mongoose.model('wisatas', wisataSchema);

module.exports = Wisata