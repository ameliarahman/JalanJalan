const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt')


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function (e) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            },
            message: '{VALUE} is not a valid email'
        },
        required: [true, 'Email is required']
    }
})

userSchema.pre('save', function (next) {
    let hash = bcrypt.hashSync(this.password, 10)
    this.password = hash
    next()
})

const User = mongoose.model('users', userSchema);

module.exports = User