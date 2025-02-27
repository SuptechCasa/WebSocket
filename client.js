const btnConnect=document.getElementById('connect')
document.getElementById('envoyer').disabled=true
let socket
btnConnect.addEventListener('click',()=>{
    if (!socket){
        socket = new WebSocket('ws://localhost:8080');
        socket.addEventListener('open', () => {
            document.getElementById('connect').innerText="Se déconnecter"
            console.log('Connexion ouverte');
            document.getElementById('envoyer').disabled=false
        });

        socket.addEventListener('close', () => {
            console.log('Connexion fermée');
            btnConnect.innerText="Se connecter"
        });
    }else{
        socket.close()
        socket=undefined
        document.getElementById('envoyer').disabled=true
    }
})

/*
socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    console.log('Message reçu :', data);
});


*/