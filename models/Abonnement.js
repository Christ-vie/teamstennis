const mongoose = require('mongoose');
const {ismail} = require('validator')

const AbonnementSchema = new mongoose.Schema({
    id:{type:String},
    date1: {type: Date},
    montant: { type: Number},
    lastdate:{ type: Date},
    modeDePaiement:{ type: String},

}, {
  timestamps: true,
}
        );

module.exports = mongoose.model(' Abonnement',AbonnementSchema);