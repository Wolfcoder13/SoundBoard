var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Soundboard Website' });
});

/* GET First soundboard */
router.get('/andri_sound', function(req, res) {
    res.render('andri_sound', { title: "Andri's " });
});

/* GET First soundboard */
router.get('/bjartur_sound', function(req, res) {
    res.render('bjartur_sound', { title: "Bjartur's Soundboard" });
});

/* GET First soundboard */
router.get('/birgir_sound', function(req, res) {
    res.render('birgir_sound', { title: "Birgir's Soundboard" });
});

/* GET First soundboard */
router.get('/bjarni_sound', function(req, res) {
    res.render('bjarni_sound', { title: "Bjarni's Soundboard" });
});

/* GET First soundboard */
router.get('/olgeir_sound', function(req, res) {
    res.render('olgeir_sound', { title: "Olgeir's Soundboard" });
});

module.exports = router;
