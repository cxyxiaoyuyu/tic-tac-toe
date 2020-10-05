const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const colorList = ['x','o']
const playerList = []

io.on('connection', (socket) => {
  console.log('a user connected 链接成功');

  if(colorList.length){
    player = {
      value: colorList.pop(),
      socket
    }
    playerList.push(player)
    socket.emit('connd',player)
  }else{
    socket.emit('connd',null)
  }
  
  socket.on('connd',(value)=>{
    console.log('收到数据',value)
    socket.emit('change',value)
  })

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});