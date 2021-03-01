const express = require('express');
const router = express.Router();
const compte = require('../models/Compte');
const Compte = require('../models/Compte');

router.get('/', (req, res, next) => {
    
    Compte.find()
    .exec()
    .then(doc =>{
      console.log(doc);
      res.status(200).json(doc);
    })
    
    .catch (err =>{
      console.log(err);
      res.status(500).json({error:err});
    } );
  });
  router.post('/',(req, res, next) => {
    const compte = new Compte ({
       nom:req.body.nom, sexe:req.body.sexe, email:req.body.email,
      code_postal:req.body.code_postal, adresse:req.body.adresse, telephone:req.body.tel
      
  });
      
    
     compte
      .save()
      
      .then(result => {
        console.log(result);
        res.status(201).json(result);
      })
      .catch(err =>{
        console.log(err);
        res.status(500).json({
          error:err
        });
      });
   });
  
  
  
  module.exports = router;
  
