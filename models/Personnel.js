const mongoose = require('mongoose');
const {ismail} = require('validator')

const PersonnelSchema = new mongoose.Schema({
    id : {type: String},
    nom: {type: String},
    code_postal: {type: String},
    adresse: {type: String},
    tel :{ type: Number},
       });

module.exports = mongoose.model('Personnel',  PersonnelSchema);