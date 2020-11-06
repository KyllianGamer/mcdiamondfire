const express = require('express');

var app = express();

app.get('/update', function(req, res) {
    console.log(req.body);
});