const form = document.querySelector('#regForm');                        //ASIGNAMOS TODAS LAS CONSTANTES CON SUS RESPECTIVOS id
const user = document.querySelector('#user');
const email = document.querySelector('#email');
const pwd = document.querySelector('#pwd');
const pwd2 = document.querySelector('#pwd2');
const result = document.querySelector('#result');

const errUser = document.querySelector('#errUser');                     //ASIGNAMOS CCONSTANTES DE LOS small
const errEmail = document.querySelector('#errEmail');
const errpwd = document.querySelector('#errpwd');
const errpwd2 = document.querySelector('#errpwd2');

form.addEventListener('submit', e => {                                  //EVENTO LISTENER DEL BOTÓN submit
    e.preventDefault();

    [errUser, errEmail, errpwd, errpwd2].forEach(el => el.textContent = ''); //RECORRE Y BUSCA ERRORES, Y DONDE ENCUENTRE ALGUNO DE LOS NOMBRADOS EN EL CÓDIGO, DEJA EL CAMPO AL QUE CORRESPONDA EN BLANCO
    result.textContent = '' ;

    let ok = true;                                                         //BANDERA QUE INDICARÁ SI TODOS LOS CAMPOS PASAN LA VALIDACIÓN

    if(user.value.trim().length < 3){                                                           //VALIDA QUE EL NOMBRE DE USUARIO TENGA AL MEENOS 3 CARACTERES SIN CONTAR LOS ESPACIOS EN BLANCO AL INICIO Y AL FINAL
        errUser.textContent = 'Tu nombre de usuario debe tener un mínimo de 3 caracteres.';     
        ok = false;
    }
    if(!email.checkValidity()){                                                           // VALIDAMOS EL EMAIL USANDO LA VALORACION NATIVA QUE TIEN HTML5 checkValidity
        errEmail.textContent = 'E-mail no válido';     
        ok = false;
    }
    if(pwd.value.length < 8){                                                           //VALIDA QUE EL NOMBRE DE USUARIO TENGA AL MEENOS 3 CARACTERES SIN CONTAR LOS ESPACIOS EN BLANCO AL INICIO Y AL FINAL
        errpwd.textContent = 'Tu contraseña debe tener un mínimo de 8 caracteres.';     
        ok = false;
    }
    if( pwd.value !== pwd2.value ){                                                           //VALIDA QUE EL NOMBRE DE USUARIO TENGA AL MEENOS 3 CARACTERES SIN CONTAR LOS ESPACIOS EN BLANCO AL INICIO Y AL FINAL
        errpwd2.textContent = 'Tus contraseñas no coinciden. Revisa ambos campos, e inténtalo de nuevo ';     
        ok = false;
    }
    
    
    if (ok){

        result.textContent = '¡REGISTRO REALIZADO CON ÉXITO!';
    }
    
    
    


});

