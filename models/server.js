// servidor de express
const express = require('express');
const http = require('http');
const sockteio = require('socket.io');
const path = require('path'); // para trabajar con directorios y no la raiz (__dirname)
const Sockets = require('./sockets');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // servidor  de sockets ->  Http server
        this.server = http.createServer(this.app);

        // configuracion sockets server
        this.io = sockteio(this.server, {/* configuraciones del socket server */ });
    }

    // metodos
    configurarSockets() {
        new Sockets(this.io);
    }

    // metodos middlewares
    middlewares() {
        // desplegar directorio publico -> use middleware
        this.app.use(express.static(path.resolve(__dirname, '../public')))
    }

    // metodo para inicializar la aplicacion
    execute() {

        // inicializar middlewares
        this.middlewares()

        // inicializar sockets
        this.configurarSockets()

        // inicializar server
        this.server.listen(this.port, () => {
            console.log(`Server corriendo en puerto: ${this.port}`)
        });
    }


}

module.exports = Server;