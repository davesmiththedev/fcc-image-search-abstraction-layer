'use strict'
require('dotenv').config()
const routes = require('./app/routes/routes.js')
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongo = require("mongodb").MongoClient;
const dbURL = process.env.MONGO_IMAGESEARCHDB || 'mongodb://localhost:27017/image_search_db';

mongo.connect(dbURL, (err, db)=>{
  if(err){
    throw new Error('Unable to connect to the database :(');
  }else{
    console.log('Connection to {' + dbURL + '} SUCCESFUL :)');
    routes(app, db);
  }
});

app.listen(port, (req, res)=>{
  console.log('Listening on port ' + port);
});