const mongoose = require('mongoose');
const {ismail} = require('validator')

const FactureSchema = new mongoose.Schema({
    id : {type: String},
    date: {type: String},
    reference: {type: String},
    
       });

module.exports = mongoose.model('Facture',  FactureSchema);