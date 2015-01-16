/**
 * Created by sbunke on 1/15/2015.
 */
var router = require('express').Router();

router.get('/', function (req, res) {
    res.sendfile('layouts/posts.html')
})

module.exports = router