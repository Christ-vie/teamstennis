const express = require('express');
const abonnement = require('../models/Abonnement');
const router = express.Router();
const Abonnement= require('../models/Abonnement');

router.get('/', async (req, res) => {
    const abonnement = await Abonnement.find({});
  
    try {
      res.send(abonnement);
    } catch (err) {
      res.status(500).send(err);
    }
  });

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