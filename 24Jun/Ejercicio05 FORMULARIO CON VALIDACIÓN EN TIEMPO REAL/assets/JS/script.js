const cName = document.querySelector('#cName');
const cEmail = document.querySelector('#cEmail');
const cMsg = document.querySelector('#cMsg');

const eName = document.querySelector('#eName');
const eEmail = document.querySelector('#eEmail');
const eMsg = document.querySelector('#eMsg');

function validateField(filed, errorEl, validator, msg){                                 //FUNCIÓN GENÉRICA PARA VALIDAR UN CAMPO (filed). errorEl MOSTRARÁ EL MENSAJE DE ERROR EN CASO DE HABERLO. validator RECIBE EL VALOR Y DEVUELVE true SI ES VALIDO
    if (validator(filed.value)){                                                        //LLAMA A validator CON EL VALOR ACTUAL DEL CAMPO
        filed.classList.add('valid');                                                   //SI ES VÁLIDO, DEVUELVE LA CLAVE valid
        filed.classList.remove('invalid');                                              //Y QUITA LA CLASE invalid POR SI ESTABA PUESTA
        errorEl.textContent = '';                                                       //LIMPIA EL CAMPO Y LO DEJA EN BLANCO

    } else{
        filed.classList.add('invalid');                                                 //SI NO PASA LA VALIDACIÓN AÑADE LA CLASE invalid Y/O SUSTITUYE valid POR invalid
        errorEl.textContent = msg;
    }
}

cName.addEventListener('blur', () => {                                                  //AÑADE UN LISTENER AL EVENTO blur DE cName (CUANDO PIERDE EL FOCO)
    validateField(
        cName,                                                                          //CAMPO A VALIDAR
        eName,                                                                          //CAMPO A VALIDAR
        v => v.trim() !== '',                                                           // validator : DEVUELVE true SI NO ESTÁ VACÍO
        'obligatorio'
    );

});

cEmail.addEventListener('blur', () => {                                                  //AÑADE UN LISTENER AL EVENTO blur DE cName (CUANDO PIERDE EL FOCO)
    validateField(
        cEmail,                                                                          //CAMPO A VALIDAR
        eEmail,                                                                          //CAMPO A VALIDAR
        v => /\S+@\S+\.\S+/.test(v),                                                     // validator : regex PARA VALIDAR EMAILS
        'E-mail no válido'
    );
});

cMsg.addEventListener('blur', () =>{                                                    //FUNCIÓN PARA textarea
    validateField(                                                                      //VALIDA QUE EL MEENSAJE TENGA AL MENOS 20 CARACTERES (SIN CONTAR LOS ESPACIOS)
        cMsg,                                                                           // CAMPO A VALIDAR
        eMsg,                                                                           //ELEMENTO ERROR
        v => v.trim().length >= 20,                                                     //DA ERROR SI SE INGRESA MENOS DE 20 CARACTERES
        'Mínimo 20 caracteres'
    );
});

