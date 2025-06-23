const btnToggle = document.querySelector('#toggleMenu');            //SE OBTIENE EL BOTÓN QUE ALTERARÁ EL MENÚ CON id=toggleMenu

const nav = document.querySelector('#mainNav');                     //SE OBTIENE EL MENÚ DE NAVEGACIÓN  

btnToggle.addEventListener('click', () => {                         //SE AGREGA EL EVENTO CUANDO SE HACE CLICK AL BOTÓN 
    const abierto = nav.style.display === 'block' ;                 //SE COMPRUEBA SI EL MENÚ ACTUALMENTE ESTÁ VISIBLE
    nav.style.display = abierto ? 'none' : 'block' ;                //SI ESTÁ ABIERTO, LO OCULTA, SI ESTÁ OCULTA, LO MUESTRA

    btnToggle.textContent = abierto? 'Mostrar menú' : 'Ocultar menú'; //CAMBIA EL TEXTO DEL BOTÓN SEGÚN EL ESTADO DEL MENÚ

});