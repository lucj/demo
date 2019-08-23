const express = require('express');
const app = express();
const stats = {};
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
console.log(req.ip);
    let ip = req.connection.remoteAddress;
    stats[ip] = stats[ip] ? stats[ip] + 1 : 1;
    res.send(stats);
});
app.listen(8000);
