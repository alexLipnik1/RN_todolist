const { mongoose } = require('./index');

let userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    }
})

let User = mongoose.model('User', userSchema, '_user');
module.exports = {
    User
}