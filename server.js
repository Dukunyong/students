var express = require('express');
var app= express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/server.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	// 把用户发来的信息分享给所有人
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
http.listen(3000);