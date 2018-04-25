const Express = require('express');
const Path = require('path');
const htmlR = Express();


htmlR.get('/', (req, res) => {

    res.sendFile(Path.join(__dirname, '../public/home.html'));

});

htmlR.get('/survey', (req, res) => {

    res.sendFile(Path.join(__dirname, '../public/survey.html'));

});

module.exports = htmlR;