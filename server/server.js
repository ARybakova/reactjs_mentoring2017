const express = require('express');
const path = require('path');
const app = express();

const static_path = path.join(__dirname, './../built');

app.use(express.static('built'));
app.get('*', function(req, res) {
    res.sendFile('./index.html', {
        root: static_path
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});