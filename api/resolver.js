var express = require('express');
var url = require('url');
var app = express();
var request = require('request');
var translate = require('yandex-translate')("trnsl.1.1.20170105T023956Z.0c7764a3513530f2.613c7c4d8e18e09e45aaf254f19ef0a2a4694b1e");


module.exports = function(req, res) {
  console.log('req.body', req.body);
  var data = JSON.parse(req.body.params);
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params');
    return;
  }
  var TO = data.from+'-'+data.to;
  translate.translate(data.text, { to: TO }, function(err, result) {
      console.log(result.text);
      var html = '<p>'+result.text+'</p>';
      res.json({
        body: html,
        raw: true
        // Add raw:true if you're returning content that you want the user to be able to edit
      });
  });
  
  
};
