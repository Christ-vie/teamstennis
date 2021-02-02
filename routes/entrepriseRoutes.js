
const express = require('express');
const router = express.Router();
const Entreprise = require('../models/Entreprise');


router.post('/', async (req, res) => {
    const {id,nom,code_postal,adresse,tel} = req.body
      
    try {
        const entreprise = await Entreprise.create({id,nom,code_postal,adresse,tel});
        return res.status(201).json();
    } catch(err){
        return res.status(400).send(err);
    }
   
});

module.exports = router;