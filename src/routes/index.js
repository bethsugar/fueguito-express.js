// routes

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', { title: 'FUEGUITO'});
 });

 router.get('/mapas', (req, res) => {
    res.render('mapas.html', { title: 'FUEGUITO'});
 });

 router.get('/registrate', (req, res) => {
   res.render('registro.html', { title: 'FUEGUITO'});
});
 
 module.exports = router;