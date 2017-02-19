'use strict'
module.exports = {
  addSearch: function (db, searchTerm){
      let newSearch = {search: searchTerm, time: Date()};
      return db.collection('searches').insert(newSearch).then((response)=>{
          return {result: response.result.n === 1 && response.result.ok === 1};
      });
  }  
};