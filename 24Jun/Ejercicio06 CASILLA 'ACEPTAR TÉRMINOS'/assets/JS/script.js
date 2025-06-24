const subForm = document.querySelector('#subForm');
const email = document.querySelector('#email');
const agree = document.querySelector('#agree');

const errS = document.querySelector('#errSEmail');
const errA = document.querySelector('#errAgree');
const subResult = document.querySelector('#subResult');


subForm.addEventListener('submit', e => {
    e.preventDefault();

    errS.textContent = '';
    errA.textContent = '';
    subResult.textContent = '';
    
    let valid = true;

    if(!email.checkValidity()){
        errS.textContent = 'Email no válido';
        valid = false;
    }
    if(!agree.checked){
        errA.textContent = 'Debes aceptar los términos para suscribirte';
        valid = false;
    }

    if(valid){
        subResult.textContent='¡GRACIAS POR SUSCRIBIRTE!';
    }
});