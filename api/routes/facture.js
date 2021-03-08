const express = require('express');
const router = express.Router();
const facture = require('../models/Facture');
const Facture = require('../models/Facture');

router.get('/', (req, res, next) => {
    
    Facture.find()
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
    const facture = new Facture({
       date:req.body.date, 
       reference:req.body.reference
  });
      
    
     facture
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
  
