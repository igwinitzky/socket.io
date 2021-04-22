const {io} = require('../index');

//MENSAJES DE SOCKETS
io.on('connection', client => {
    //CLIENTE CONECTADO
    client.log('Cliente conectado');
    
    //CLIENTE DESCONECTADO
    client.on('disconnect', () => { 
      console.log('Cliente desconectado');
    });
    
    //CLIENTE ESCUCHANDO
    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);
        io.emit('mensaje', {admin: 'Nuevo Mensaje'});
    });
});



