const mongoose = require('mongoose');
const {ismail} = require('validator')

const EntrepriseSchema = new mongoose.Schema({
    id : {type: String, minlength:3,maxlength:55,trim:true},
    nom: {type: String},
    code_postal: {type: String},
    adresse: {type: String},
    tel :{ type: Number},
       });

module.exports = mongoose.model('Entreprise', EntrepriseSchema);