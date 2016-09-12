'use strict';

const express = require('express');
const rabbitmq = require('./tests/rabbitmq/send.js');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', function (req, res) {
  console.log('Running on http://localhost:' + PORT);


  rabbitmq.send('Hello world\n',function(msg){res.send(msg)});
  //res.send('Hello world\n')

});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
