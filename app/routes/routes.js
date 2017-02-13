const api = require("../api/search_term_db.js");

module.exports = function(app, db){
    app.get('/:search', (req, res)=>{
        api.addSearch(db, req.params.search).then((result)=>{
            res.status(200).send((result) ? 'Added' : 'Not Added');
        });
    });
    
    app.get('/', (req,res)=>{
        res.status(200).send('Hello');
    });
};