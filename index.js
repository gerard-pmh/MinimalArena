'use strict';

const Express = require('express');
const SocketIO = require('socket.io');

let app = Express();
let server = require('http').Server(app);
let io = SocketIO(server);

app.use(Express.static('node_modules/phaser/dist'));
app.use(Express.static('dist'));

server.listen(3000);
