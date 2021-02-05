const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config({path:'./config/.env'});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const abonnementRouter = require('./routes/abonnementRoutes');
const personnelRouter = require('./routes/personnelRoutes');
app.use('/ personnel', personnelRouter);
app.use('/abonnements',abonnementRouter);
    
    
//database 
mongoose.connect(process.env.DB_CONNECTION,   {useUnifiedTopology: true,
    useNewUrlParser: true 
} ,() => console.log('connected to DB!'));
      
    
    
    app.listen(3000, () => { console.log('Server is running...') });

