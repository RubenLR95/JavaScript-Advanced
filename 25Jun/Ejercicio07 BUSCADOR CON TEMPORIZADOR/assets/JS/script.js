let temporizador;                       //ASIGNAMOS VARIABLE QUE CONTENGA EL ID DEL TEMPORIZADOR

document                                //SELECCIONAMOS EL INPUT CON ID buscador
    .getElementById('buscador')
    .addEventListener('input', e => {   //EVENTO PARA QUE CADA VEZ QUE EL USUARIO ESCRIBE ALGO SE RESETEA EL TEMPORIZADOR

        clearTimeout(temporizador);

        temporizador = setTimeout(() => { //PARA QUE TRAS 500 MILISEGUNDOS EJECUTE LA FUNCION
            document.getElementById('log').textContent = 'Buscando: ' + e.target.value;

        }, 500);                        // ESPERA 500 MILLISEGUNDOS TRAS CADA INTERACIÓN

    });