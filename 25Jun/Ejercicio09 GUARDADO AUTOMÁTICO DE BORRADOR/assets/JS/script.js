// REFERENCIA AL TEXTAREA

const editor = document.getElementById('editor');
const statusDiv = document.getElementById('status');

let timerId;                                                    //VARIABLE PARA ALMACENAR EL IDENTIFICADOR DEL TEMPORIZADOR

editor.addEventListener('input', () => {                        // CADA VEZ QUE EL USUARIO INTERACTUA CON EL textarea...
    statusDiv.textContent = 'Escribiendo...';                   //MOSTRAMOS EN EL SISTEMA QUE ESTÁ DETECTANDO LA ESCRITURA...
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        console.log('Guardado: ', editor.value);
        statusDiv.textContent = 'Borrador guardado';
    }, 2000);
});
