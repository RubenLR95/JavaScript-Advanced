const btn = document.querySelector('#showBtn');                             //SELECCIONA EL BOTÓN CON id="showBtn" Y LO GUARDA EN LA CONSTANTE btn

const msg = document.querySelector('#msg');                                 //SELECCIONA EL PARRAFO CON id="MSG" Y LO GUARDA EN LA CONSTANTE msg

btn.addEventListener('click', () => {                                       //AÑADE UN LISTENER AL BOTÓN QUE, AL HACER CLICK, CAMBIA EL TEXTO DEL PÁRRAFO
    msg.textContent = '¡Hola mundo!';

});

const box = document.querySelector('.hover-box');                           //SELECCIONA EL div CON LA CLASE hoover-box Y LO GUARDA EN LA CONSTANTE box

box.addEventListener('mouseover', () => {                                   //AÑADE UN LISTENER QUE DETECTA CUANDO EL CURSOR ENTRA EN EL AREA DEL div
    box.textContent = 'Me estás haciendo cover';                            //CAMBIA EL EVENTO DEL div PARA INDICAR QUE HAY hover
});

box.addEventListener('mouseout', () => {                                    //AÑADE UN LISTENER QUE DETECTA CUANDO EL CURSOR SALE DEL AREA DEL div
    box.textContent = 'Pasa el ratón por aquí';                             //CUANDO SE PRODUCE EL EVENTO mouseout RESTABLECE EL TEXTO ORIGINAL
});