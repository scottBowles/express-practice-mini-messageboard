var express = require('express');
var router = express.Router();
var app = require('../app');

const messages = [{text: "Hi there!", user: "Amando", added: new Date() }, {text: "Hello World!", user: "Charles", added: new Date() } ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET new post page. */
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'New Post'});
});

router.post('/new', function(req, res, next) {
  let user = req.body.user;
  let message = req.body.message;
  messages.push({text: message, user: user, added: new Date()});
  res.redirect('/');
})

module.exports = router;
