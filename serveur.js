const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    socket.on('message', (message) => {
        receivedMsg=message.toString()
        if (receivedMsg.slice(0,3)==="con"){
            msg=receivedMsg.slice(3)+" connecté"
        }else{
            msg=receivedMsg.slice(3)
        }
        socket.send(msg)
    });

    socket.on('close', () => {
        console.log('Client déconnecté');
    });
});

console.log('Serveur WebSocket en écoute sur ws://localhost:8080');
