const mongoose = require('mongoose');
const {ismail} = require('validator')

const PersonnelSchema = new mongoose.Schema({
    
    nom: {type: String},
    sexe:{type:String},
    email:{type:String},
    code_postal: {type: String},
    adresse: {type: String},
    tel :{ type: Number},
       });

module.exports = mongoose.model('Personnel',  PersonnelSchema);