


const socketController = ( socket ) => {
    
    console.log('Cliente conectado', socket.id);

    socket.on( 'disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });


    // Clientes conectados
    socket.on( 'enviar-mensaje', ( payload, callback ) => {
        // console.log( payload );
        const id = 123456;
        callback( id );

        socket.broadcast.emit( 'enviar-mensaje', payload );
    });

}






module.exports = {
    socketController
}