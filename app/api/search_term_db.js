'use strict'
module.exports = {
  addSearch: function (db, searchTerm){
      let newSearch = {search: searchTerm, time: Date()};
      return db.collection('searches').insert(newSearch)
        .then((response)=>{
            return {result: response.result.n === 1 && response.result.ok === 1};
      });
  },
  
  getSearchHistory: function(db, numberOfResults, callBack){
    let searches = db.collection('searches');
    db.collection('searches').find({}, {"limit": numberOfResults, "sort": [['time', 'desc']]})
      .toArray()
      .then((searchHistory)=>{
        let JSONsearchHistory = JSON.stringify(searchHistory);
        callBack(JSONsearchHistory);
    });
  }
};