import * as express from "express";
import * as mongojs from "mongojs";

var router = express.Router();

//connection string
var db = mongojs('mongodb://ruddy:answersetc123@ds139425.mlab.com:39425/boats_api', ['boats']);

//Get All Boats
router.get('/', function (req, res, next) {
    db.boats.find(function (err, boats) {
        if (err) {
            res.send(err);
        }
        res.json(boats);

    });
});

//Get boat by Id
router.get('/:id', function (req, res, next) {
    db.boats.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, boat) {
        if (err) {
            res.send(err);
        }
        res.json(boat);
    });
});

module.exports = router;