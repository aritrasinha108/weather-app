var express = require('express');
var fs = require('fs');
const bodyParser = require('body-parser');
var router = express.Router();
router.route('/').all((req, res, next) => {
    var file = fs.readFileSync(__dirname + '/public/html/index.html');
    res.writeHead(200, { contentType: "text/HTML" });
    res.end(file);
    next();
});
router.route('/city').all((req, res, next) => {
    var file = fs.readFileSync(__dirname + '/public/html/city.html');
    res.writeHead(200, { contentType: "text/HTML" });
    res.end(file);
    next();
});
router.route('/map').all((req, res, next) => {
    var file = fs.readFileSync(__dirname + '/public/html/map.html');
    res.writeHead(200, { contentType: "text/HTML" });
    res.end(file);
    next();
});
module.exports = router;