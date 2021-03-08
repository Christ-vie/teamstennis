const { request } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const abonnement = require('../models/Abonnement');
const router = express.Router();
const Abonnement= require('../models/Abonnement');


router.get('/', (req, res, next) => {
    
    Abonnement.find()
    .exec()
    .then(docs =>{
  
      res.status(200).json({
        count: docs.length,
        abonnements: docs.map(doc =>{
          return{
            id: doc.id,
            firstdate:doc.firstdate,
            montant: doc.montant,
            lastdate: doc.lastdate,
            modeDePaiement: doc.modeDePaiement,
            request:{
              type:'GET',
              url:'http://localhost:3000/abonnements/'+doc.id
            }
          }

        })
      });
  })
    
    .catch (err =>{
      console.log(err);
      res.status(500).json({error:err});
    } );
  });
 // POST 
 router.post('/',(req,res, next) =>{

 }) 

 router.post('/',(req, res, next) => {
   
  const abonnement = new Abonnement ({
    
    firstdate:req.body.firstdate, 
    montant:req.body.montant,

    lastdate : req.body.lastdate,
    modeDepaiement:req.body.modeDepaiement});
    
  
   abonnement
    .save()
    
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'abonnement succeeded',
        createdAbonnement:{
          id: result.id,
          firstdate:result.firstdate,
          montant: result.montant,
          lastdate: result.lastdate,
          modeDePaiement: result.modeDePaiement,

        },
        request: {
          type: 'GET',
          url:'http://localhost:3000/abonnements/'+result.id
        }
      });
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({
        error:err
      });
    });
 });
 


module.exports = router;