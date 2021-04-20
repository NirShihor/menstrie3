const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

let port = process.env.PORT;
if (port == null || port == '') {
  port = 4000;
}

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/oldAndNew', function (req, res) {
  res.render('oldAndNew');
});

app.get('/events', function (req, res) {
  res.render('events');
});

app.get('/groups', function (req, res) {
  res.render('groups');
});

if (port == null || port == '') {
  port = 3000;
}
app.listen(port, function () {
  console.log('Server started successfully');
});
