const express = require('express');

var app = express();

app.post('/', function(req, res) {
    console.log(req.body);
});

console.log('Listening on 8888');
app.listen(process.env.PORT || 8888);