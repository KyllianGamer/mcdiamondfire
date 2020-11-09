const express = require('express');
const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var app = express();
app.use(express.json());

app.post('/', function(req, res) {
    console.log(req.body);
    data = req.body;
    if (data.type==="export") {
      let channel = client.channels.cache.get(config.exports);
      channel.send(data.actionPlayer + ' exported!')
    }
});

console.log('Listening on 8888');
app.listen(process.env.PORT || 8888);
client.login(config.TOKEN);