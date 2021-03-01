
const express = require('express');
const router = express.Router();
const personnel = require('../models/Personnel');
const  Personnel = require('../models/Personnel');

router.get('/', (req, res, next) => {
    
    Personnel.find()
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
  const personnel = new Personnel ({
    id:req.body.id, nom:req.body.nom, sexe:req.body.sexe, email:req.body.email,
    code_postal:req.body.code_postal, adresse:req.body.adresse, tel:req.body.tel
    
});
    
  
   personnel
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