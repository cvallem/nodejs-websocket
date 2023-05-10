const lblOnline     = document.querySelector('#lblOnline');
const lblOffline    = document.querySelector('#lblOffline');
const txtMensaje    = document.querySelector('#txtMensaje');
const txtMensajes   = document.querySelector('#txtMensajes');
const btnEnviar     = document.querySelector('#btnEnviar');


const socket = io();



socket.on('connect', () => {
    // console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');

    lblOffline.style.display = '';
    lblOnline.style.display  = 'none';
});

socket.on('enviar-mensaje', ( payload ) => {
    const { mensaje, id, fecha } = payload;

    txtMensajes.value += fecha + ' - ' + mensaje + '\n';
});

btnEnviar.addEventListener( 'click', () => {
    
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '1234abcd',
        fecha: new Date().getTime()
    }


    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id );
    });

});


