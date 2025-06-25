// ACCEDE AL DOCUMENTO DEL DOM CON idMensaje
document
    .getElementById('btnMensaje')
    .addEventListener('click', () => {      // AL HACER CLICK CAMBIA EL CONTENIDO DEL DIV CON ID RETARDO
        document.getElementById('retardo').textContent = '...pensando...';

        setTimeout(() => {
            document.getElementById('retardo').textContent = 'Ya está listo';
        }, 2000);

    });