'use strict'
const google = require('googleapis');
const customsearch = google.customsearch('v1');

module.exports = (searchTerm, offset, callBack)=>{
    customsearch.cse.list({ cx: process.env.CSE_ID, 
                            q: searchTerm, 
                            auth: process.env.CSE_API_KEY, 
                            searchType: 'image', 
                            num: offset<=10?offset:10}, //Max of 10 results per search
    (err, resp)=> {
        if (err) {
            console.log('An error occured', err);
            return;
        }
        let results = [];
        resp.items.forEach((item)=>{
            let url = item.link;
            let snippet = item.snippet;
            let thumbnail = item.image.thumbnailLink;
            let context = item.image.contextLink;
            results.push({  'url': url, 
                            'snippet': snippet, 
                            'thumbnail': thumbnail, 
                            'context': context});
        });
        let JSONresults = JSON.stringify(results);
        callBack(JSONresults);
    });
}
