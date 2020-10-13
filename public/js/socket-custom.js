var socket = io();
        socket.on('connect',function(){
            console.log("Conectado al servidor")
        });
        //escuchar sucesos
        socket.on('disconnect',function(){
            console.log('Perdimos conexion con el server');
        });

        //enviar informacion
        socket.emit('enviarMensaje',{
            usuario:'Eddy Paz',
            mensaje:'Hola Mundo'
        },function(mensaje){
            console.log('Respuesta server',mensaje);
        });

        //Escuchar informacion
        socket.on('enviarMensaje',function(mensaje){
            console.log('Servidor: ',mensaje);
        });