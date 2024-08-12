var express = require('express');
var app = express();
const conn = require('./config');
var router = require('./controller/router');
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname,'/uploads')));

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.use(express.static('views'));
app.use('/',router);
app.listen(5200);
