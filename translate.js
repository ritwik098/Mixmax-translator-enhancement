var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');


app.use(bodyParser.urlencoded({
  extended: true
}));

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

// The editor interface.
app.get('/editor', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// The in-email representation.
app.post('/api/resolver', cors(corsOptions), require('./api/resolver'));

app.listen(8080,function(){
	console.log("magic happens at 8080");
});