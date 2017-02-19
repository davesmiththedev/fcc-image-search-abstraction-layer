'use strict'
const dbApi = require("../api/search_term_db.js");
const search = require('../api/search.js');

module.exports = (app, db)=>{
    app.get('/api/latest/imageSearch', (req, res)=>{
        
    });
    
    app.get('/api/imageSearch/:search', (req, res)=>{
        dbApi.addSearch(db, req.params.search);
        search(req.params.search, req.query['offset'], (searchResult)=>{
            res.status(200).send(searchResult); 
        });
    });
    
    app.get('/', (req,res)=>{
        res.status(200).send('Hello');
    });
};