const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MyUserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is Required'
    }
});

const User = mongoose.model('User', MyUserSchema);

module.exports = User;