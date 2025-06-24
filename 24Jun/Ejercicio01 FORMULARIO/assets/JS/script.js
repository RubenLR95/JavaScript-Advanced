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

