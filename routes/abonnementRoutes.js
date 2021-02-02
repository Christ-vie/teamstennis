const express = require('express');
const router = express.Router();
const Abonnement= require('../models/Abonnement');

router.post('/', async (req, res) => {
  const {id, date1, montant, lastdate, modeDepaiement} = req.body
    
  try {
      const abonnement = await Abonnement.create({id, date1, montant ,lastdate, modeDepaiement});
      return res.status(201).json();
  } catch(err){
      return res.status(400).send(err);
  }
 
});

module.exports = router;