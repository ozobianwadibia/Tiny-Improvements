const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MyKudosSchema = new Schema({
    title: String,
    body: String
        // users: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // }]
});

const Kudos = mongoose.model('Kudos', MyKudosSchema);

module.exports = Kudos;