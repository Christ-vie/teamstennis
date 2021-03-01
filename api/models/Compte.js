const mongoose = require('mongoose');
const {ismail} = require('validator')

const CompteSchema = new mongoose.Schema({
    
    nom: {type: String},
    email:{type:String},
    code_postal: {type: String},
    adresse: {type: String},
    telephone :{ type: Number},
       });

module.exports = mongoose.model('Compte',  CompteSchema);