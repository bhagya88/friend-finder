var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.setUrlEncoding({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type : 'application/vnd.api+json' }))

app.listen(PORT);