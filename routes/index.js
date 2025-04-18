var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 5' });
});
/* POST home page. */
router.post('/', function(req, res, next) {
  res.send('Got a POST request')
})

module.exports = router;
