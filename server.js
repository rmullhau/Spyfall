//Requiring Shits
var express = require('express');
var app = express();
var serv = require('http').Server(app);
var HashMap = require('hashmap');

//Init Express
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
var port = process.env.PORT || 8000;
serv.listen(port, function() {
  console.log('Listening on port ' + port);
});

//Init Socket.io
var io = require('socket.io')(serv, {});

io.on('connection', function(socket) {
  console.log('User with ID ' + socket.id + ' connected.');


  //CREATING A GAME
  socket.on('gameStartEvent', function(username, gameID) {
    console.log('User ' + username + ' is creating a game with ID of ' + gameID);
    socket.join(gameID);
    io.to(gameID).emit('genMessage', 'Successfully joined game ' + gameID + '.');

  });

  //JOINING A GAME
  socket.on('gameJoinEvent', function(username, gameID) {
    console.log('User ' + username + ' is joining a game with ID of ' + gameID);
  });

});
