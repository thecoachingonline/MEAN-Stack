var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  user.login();
  res.send('test post');
});
/* GET users listing. */

module.exports = router;
