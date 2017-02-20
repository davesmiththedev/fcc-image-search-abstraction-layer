'use strict'
const dbApi = require("../api/search_term_db.js");
const search = require('../api/search.js');
const path = require('path');

module.exports = (app, db)=>{
    app.get('/api/latest/imageSearch', (req, res)=>{
        dbApi.getSearchHistory(db, 10, (searchHistory)=>{
            res.status(200).send(searchHistory);
        });
    });
    
    app.get('/api/imageSearch/:search', (req, res)=>{
        dbApi.addSearch(db, req.params.search);
        search(req.params.search, req.query['offset'], (searchResult)=>{
            res.status(200).send(searchResult); 
        });
    });
    
    app.get('', (req,res)=>{
        let fileName = path.resolve(__dirname, '../../views/home.html');
        res.status(200).sendFile(fileName);
    });
};