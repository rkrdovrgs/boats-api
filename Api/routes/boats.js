var express = require('express');
var router = express.Router();

//Get All Boats
router.get('/boats', function(req, res, next){
res.send('BOATS API');
});

module.exports = router;