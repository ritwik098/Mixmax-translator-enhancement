//TO SCRAPE THE REQUIRED WEBPAGE TO GET THE THE LIST OF LANGUAGES SUPPORTED
// ALONG WITH THEIR KEYS

var request = require('request');
var cheerio = require('cheerio');

request('https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var contents = $('table').eq(1).find('tbody').first().children('tr');
    $(contents).each(function(i,elem){
    	if(i !== 0){
    		console.log("<option value='"+$(this).children('td').eq(1).text()+"'>"+$(this).children('td').eq(0).text()+"</option>");
    	}
    });

    $(contents).each(function(i,elem){
    	if(i !== 0){
    		console.log("<option value='"+$(this).children('td').eq(3).text()+"'>"+$(this).children('td').eq(2).text()+"</option>");
    	}
    });
  }
});