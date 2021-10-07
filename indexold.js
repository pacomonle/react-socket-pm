// servidor de express
const express = require('express');
const app = express();


// servidor  de sockets
const server = require('http').createServer(app);

// configuracion sockets server
const io = require('socket.io')(server);

// desplegar directorio publico -> use middleware
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('Cliente conectado...')
    console.log(socket.id)
    socket.emit('mensaje-bienvenida', {
        msg: 'Bienvenido al servidor ...',
        fecha: new Date()
    })
    /*  socket.on('mensaje-cliente', (data) => {
         console.log(data)
     }) */
    socket.on('mensaje-to-server', (data) => {
        console.log(data)

        // socket.emit('mensaje-from-server', data)
        io.emit('mensaje-from-server', data)
    })


})


server.listen(8080, () => {
    console.log('server corriendo en ouerto: 8080')
});
