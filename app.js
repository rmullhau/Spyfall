//Requiring Shits
var express = require('express');
var app = express();
var serv = require ('http').Server(app);

//Init Express
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
serv.listen(process.env.PORT ||'2000');
console.log('Ass blaster 9000 ready for duty on *:2000');

//Init Socket.io
var io = require('socket.io')(serv, {});
io.sockets.on('connection', function(socket) {
  console.log('User connected.');

});
