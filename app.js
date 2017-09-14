const express = require('express');
const path = require('path');
const app = express();
const route = require('./route');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(route);
app.listen(3000);
