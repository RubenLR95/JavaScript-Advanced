                                        //FUNCION QUE RECIBE UN NOMBRE Y UN callback
                                        // cb ABREBIATURA DE callback 

function saludar(nombre, cb){               // SE CONTRUYE UN MENSAJE DE SALUDO CON EL NOMBRE
    const mensaje = `¡Hola!, ${nombre}!`;   // SE EJECUTA LA FUNCIÓN callback

    cb(mensaje);
}

document
.getElementById('btnSaludo')            // SE ACCEDE AL BOTÓN CON ID btnSaludo
.addEventListener('click', () => {      // CUANDO SE HACE CLICK SE LLAMA A LA FUNCIÓN SALUDAR CON EL NOMBRE 'ANA' Y UNA FUNCIÓN ANÓNIMA COMO CALLBACK

    saludar('Ana', msg => {
        document.getElementById('salida').textContent = msg;
    });
});