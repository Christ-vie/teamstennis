const mongoose = require('mongoose');
const {ismail} = require('validator')

const UserSchema = new mongoose.Schema({
    
    nom: {type: String},
    email:{type:String},
    password:{type:String},

    
       });

module.exports = mongoose.model('User',  UserSchema);