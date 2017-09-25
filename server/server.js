const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./../webpack.config.js');
const app = express();
const compiler = webpack(config);

const PORT = 3000;
const DIST_DIR = path.join(__dirname, './../built');

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.get('*', function(req, res, next) {
    const filename = path.join(DIST_DIR, "index.html");

    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!')
});