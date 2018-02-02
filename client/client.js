var socket = io();

socket.on('genMessage', function(message) {
  console.log(message);
});


$(document).ready(function() {

  //START GAME
  $("#startGameButton").click(function startGameClick() {
    var username = $('#startGameUsername').val().toString();
    var gameID = $('#startGameGameID').val().toString();

    socket.emit('gameStartEvent', username, gameID);

  });

  //JOIN GAME
  $("#joinGameButton").click(function joinGameClick() {
    var username = $('#joinGameUsername').val().toString();
    var gameID = $('#joinGameGameID').val().toString();

    socket.emit('gameJoinEvent', username, gameID);

  });
});
