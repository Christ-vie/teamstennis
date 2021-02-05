
const express = require('express');
const router = express.Router();
const personnel = require('../models/Personnel');
const  Personnel = require('../models/Personnel');

router.get('/', async (req, res) => {
    const  personnel = await  Personnel.find({});
  
    try {
      res.send( personnel);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
router.post('/', async (req, res) => {
    const {id, nom, code_postal, adresse, tel} = req.body
      
    try {
        const  personnel = await  Personnel.create({id, nom, code_postal, adresse, tel});
        return res.status(201).json();
    } catch(err){
        return res.status(400).send(err);
    }
   
});

module.exports = router;