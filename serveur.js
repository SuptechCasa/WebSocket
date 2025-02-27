const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Nouveau client connecté');
/*
    socket.on('message', (message) => {
        console.log('Message reçu:', message);
        socket.send('Message bien reçu!');
    });
*/
    socket.on('close', () => {
        console.log('Client déconnecté');
    });
});

console.log('Serveur WebSocket en écoute sur ws://localhost:8080');
