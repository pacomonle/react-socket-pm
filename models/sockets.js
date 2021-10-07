
class Sockets {

    constructor(io) {

        this.io = io

        this.socketsEvents()
    }

    // metodos

    socketsEvents() {
        // on connection
        this.io.on('connection', (socket) => {
            console.log(`Cliente conectado: ${socket.id}`)
            socket.emit('mensaje-bienvenida', {
                msg: 'Bienvenido al servidor ...',
                fecha: new Date()
            })
            // escuhar evento
            socket.on('mensaje-to-server', (data) => {
                console.log(data)
                this.io.emit('mensaje-from-server', data)
            })


        })
    }


}


module.exports = Sockets;