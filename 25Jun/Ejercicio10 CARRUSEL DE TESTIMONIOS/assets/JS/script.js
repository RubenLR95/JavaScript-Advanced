// EL ARRAY CONTIENE LOS TESTIMONIOS A MOSTRAR
const testimonials = [
    {text: '¡Servicio excelente!', author: 'María'},
    {text: 'Muy fácil de usar', author: 'Juan'},
    {text: 'Recomendado 100%', author: 'Lucía'},
    { text: 'Atención rápida y personalizada, me encantó.', author: 'Carlos' },
    { text: 'La interfaz es muy intuitiva. ¡Buen trabajo!', author: 'Elena' },
    { text: 'Me resolvieron el problema en minutos.', author: 'Raúl' },
    { text: 'Funciona mejor de lo que esperaba.', author: 'Ana' },
    { text: 'Volveré a usarlo sin duda.', author: 'Miguel' },
    { text: 'Tardaron mucho en responder mi consulta.', author: 'Sofía' },
    { text: 'No encontré lo que buscaba, muy limitado.', author: 'Diego' },
    { text: 'Se cerró la app varias veces, muy frustrante.', author: 'Laura' },
    { text: 'La experiencia no fue la mejor, esperaba más.', author: 'Andrés' },
    { text: 'El diseño es confuso y poco amigable.', author: 'Paula' }

];

const block = document.getElementById('Testimonial');
const auth = document.getElementById('author');
const btnPause =document.getElementById('pause');
const btnResume = document.getElementById('resume');

let idx = 0; // INDICE QUE SEÑALA EN EL TESTIMONIO
let intervalId = null; // GUARDARÁ EL ID DE SetInterval PARA DETENERLO


// MUESTRE EL TESTIMONIO CORRESPONDIENTE AL ÍNDICE ACTUAL, LUEGO AVANZA EL ÍNDICE EN BUCLE ( VUELVE A 0 AL LLEGR AL FINAL)

function showTestimonial(){                     // FUNCIÓN PARA MOSTRAR EL TEXTO ENTRE COMILLAS
    const t = testimonials[idx];
    block.textContent = ` "${t.text}" `;
    auth.textContent = `- ${t.author}`;

    idx = (idx + 1) % testimonials.length;   // AVANZA EL INDICE AL VOLVER AL INICIO
}

// INICIO DE CARRUSEL
// 1. LLAMA INMEDIATAMENTE A showTestimonial()
// 2. EJECUTA showTestimonial() CADA 4 SEGUNDOS

function startCarousel(){
    showTestimonial();
    intervalId = setInterval(showTestimonial, 4000);

}

function stopCarousel(){
    clearInterval(intervalId);
}

//ASOCIAMOS LOS BOTONES A LAS FUNCIONES DEFINIDAS ANTERIORMENTE
btnPause.addEventListener('click', stopCarousel);
btnResume.addEventListener('click', startCarousel);

startCarousel(); //PARA QUE SE INICIE AL ABRIR LA PAGINA