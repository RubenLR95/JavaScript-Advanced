const form = document.querySelector('#loginForm');                  //ASIGNAMOS CONSTANTES A CADA id QUE COMPONGAN EL ELEMENTO A PROGRAMAR, EN ESTE CASO, EL form
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const msg = document.querySelector('#loginMsg');


form.addEventListener('submit', e => {                              // ESA e ES LA VARIABLE DONDE ENTRA EL OBJETO event DEL NAVEGADOR
    e.preventDefault();                                             //EVITA LA RECARGA AUTOMÁTICA DE LA PÁGINA AL ENVIAR EL FORMULARIO

    const correo = email.value.trim();                       //OBTENGO EL VALOR DEL CORREO Y LE QUITAMOS ESPACIOS EN BLANCO AL INICIO Y AL FINAL

    const clave = pass.value;                                        //OBTENEMOS EL VALOR DE LA CONTRASEÑA. SIN trim PARA NO ELIMINAR ESPACIOS INTERNOS SI LOS HUBIERA

    if (!correo.includes('@')){
        msg.textContent = 'Introduce un correo electrónico válido'; //INDICAMOS AL USUARIO QUE EL CORREO DEBE CONTENER ALMENOS UN @, EN CASO DE QUE NO LO CONTENGA
        return;
    }
    if (clave.length < 6) {                                         //VALIDA QUE LA CONTRASEÑA TENGA MÍNIMO 6 CARATERES. SI NO ES ASÍ, LE DEVUELVE UN MENSAJE DE ALERTA
        msg.textContent = 'La contraseña debe tener al menos 6 caracteres';
        return;

    }

    msg.textContent = `¡Bienvenido, ${correo} !`;

});


const display = document.querySelector('#timerDisplay');        //SE ASIGNAN CONSTANTES AL TEMPORIZADOR Y A LOS INPUTS.
const inputs = form.querySelectorAll('input');              //AQUÍ USAMOS querySelectorAll PARA QUE SELECCIONE TODOS LOS INPUTS
const TOTAL_SECONDS = 30;                                       // DURACIÓN TOTAL EN SEGUNDOS DEL CONTADOR
let timeLeft = TOTAL_SECONDS;                                   //SEGUNDOS RESTANTES 
let timeoutId,                                                  //ID QUE DEVUELVE setTimeout PARA PODER CANCELARLO
    intervalId;                                                 //ID QUE DEVUELVE setInterval PARA PODER CANCELARLO


function onTimeout(){                                           //FUNCIÓN QUE SE EJECUTA CUANDO EL TIEMPO SE AGOTA
    msg.textContent = 'Tiempo agotado. Recarga la página.';     //MOSTRAR MENSAJE DE QUE EL TIEMPO SE HA AGOTADO
    inputs.forEach(i => i.disabled = true);                     //DESHABILITAR TODOS LOS INPUTS
    form.querySelector('button').disabled = true,               //DESHABILITAR EL BOTÓN DE ENVÍO
    clearInterval(intervalId);                                  //DETENER EL INTERVALO QUE ACTAULIZA EL CONTADOR
}


function resetTimers(){                                         //FUNCIÓN PARA RESETEAR EL CONTADOR
    clearTimeout(timeoutId);                                    //CANCELA CUALQUIER TIME OUT PENDIENTE
    clearInterval(intervalId);                                  //CANCELA CUALQUIER INTERVAL PENDIENTE

    timeLeft = TOTAL_SECONDS;                                   //RESETEA LOS SEGUNDOS RESTANTES A LA DURACIÓN TOTAL
    display.textContent = timeLeft;                              //MOSTRAR EL VALOR INICIAL

    intervalId = setInterval(() => {                            //CADA SEGUNDO DECREMENTE timeLeft Y ACTUALIZA display
        timeLeft--;                                             //RESTA UN SEGUNDO
        display.textContent = timeLeft;                         //ACTUALIZA LOS SEGUNDOS RESTANTES EN LA PANTALLA

        if (timeLeft <= 0){                                     //SI LLEGA A 0 ...
            clearInterval(intervalId);                          //DETIENE LA RESTA DE SEGUNDOS PARA QUE NO LLEGUE A NÚMEROS NEGATIVOS
        }
    },1000);
    
    timeoutId = setTimeout(onTimeout,TOTAL_SECONDS * 1000);     //PARA QUE LA FUNCION onTimeout SE EJECUTE TRAS TOTAL_SECONDS

    resetTimers();   

}

                                               //AL CARGAR LA PÁGINA ARRANCA EL TEMPORIZADOR POR PRIMERA VEZ

inputs.forEach(input => {                                       //FUNCIÓN QUE HACE QUE EL CONTADOR VUELVA A SU INICIO CADA VEZ QUE EL USUARIO INTERACTUA CON UN INPUT
    ['input', 'keydown', 'focus'].forEach (evt =>               //PARA ESPECIFICAR LOS inputs EN LOS QUE SE EJECUTARÁ ESTA FUNCIÓN

    input.addEventListener(evt, resetTimers)

    );
});

























