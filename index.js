const http = require('http');
const express = require('express');
const fs = require('fs');
const router = require("./router");
const app = express();
const PORT = 80 || window.env.port;
var hostname = 'localhost';
const server = http.createServer(app);
app.use(express.static(__dirname + '/public'));
app.use(router);
server.listen(PORT, hostname, () => {
    console.log(`Listening at http://:${hostname}:${PORT}`);
});