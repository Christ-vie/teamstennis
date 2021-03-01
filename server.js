const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config({path:'./config/.env'});
const abonnementRoutes = require('./api/routes/abonnement');
const personnelRoutes = require('./api/routes/personnel');
const compteRoutes = require('./api/routes/compte');
const factureRoutes = require('./api/routes/facture');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Handling CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT', 'POST', 'PATCH', 'DELETE', 'GET');
        return res.status(200).json({});
    }
    next();

});

//routes
app.use('/personnels', personnelRoutes);
app.use('/abonnements',abonnementRoutes);
app.use('/comptes',compteRoutes);
app.use('/factures',factureRoutes );
    
//database 
mongoose.connect(process.env.DB_CONNECTION,   {useUnifiedTopology: true,
    useNewUrlParser: true 
} ,() => console.log('connected to DB!'));
      
    
    
    app.listen(3000, () => { console.log('Server is running...') });

