'use strict'
module.exports = {
  addSearch: function (db, searchTerm){
      let newSearch = {search: searchTerm, time: Date()};
      return db.collection('searches')
        .insert(newSearch)
        .then((response)=>{
            return {result: response.result.n === 1 && response.result.ok === 1};
      });
  },
  
  getSearchHistory: function(db, numberOfResults, callBack){
    db.collection('searches')
      .find({}, 
      {"limit": numberOfResults,   //Limits number of search results
      "sort": [['time', 'desc']]}) //Newest searches first
      .toArray()
      .then((searchHistory)=>{
        let JSONsearchHistory = JSON.stringify(searchHistory);
        callBack(JSONsearchHistory);
    });
  }
};