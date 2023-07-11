const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
    name:{
        type: String,
        reqiured: true
    },
    email:{
        type: String,
        reqiured: true
    },
    password:{
        type: Number,
        reqiured: true
    }
})

module.exports = mongoose.model ('models',schema);