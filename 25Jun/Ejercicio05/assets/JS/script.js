

let seg = 0;                // VARIABLE QUE CUENTA LOS SEGUNDOS

const span = document.getElementById('contador');   // SELECCIONO ELEMENTO span CON id = contador

const id = setInterval(() => {
    seg++;      // AUMENTA EL CONTADOR EN 1
    span.textContent = seg;     // ACTUALLIZA EL CONTENIDO DEL span CON EL NUEVO NÚMERO
}, 1000);                       // INDICAMOS QUE SE INCREMENTA 1 CADA SEGUNDO A seg


document
    .getElementById('btnDetener')
    .addEventListener('click', () => clearInterval(id));