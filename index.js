const express = require('express');

var app = express();

app.post('/', function(req, res) {
    console.log(req.query);
});

console.log('Listening on 8888');
app.listen(process.env.PORT || 8888);