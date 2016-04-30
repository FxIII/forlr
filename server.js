var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('/index.html');
});

io.on('connection', function(socket){
  console.log("got Connection",socket);
  socket.on("join",function(msg){
    console.log("join",msg.room);
    socket.join(msg.room)
  })
  socket.on("leave",function(msg){
    console.log("leaving",msg.room);
    socket.leave(msg.room)
  })
  socket.on("forl",function(msg){
  io.in(msg.room).emit(msg.event,msg.data);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
