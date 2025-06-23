const spans = document.querySelectorAll('p span');              //SE SELECCIONA TODDOA LOS ELEMENTOS span QUE ESTÁN DENTRO DE <p>
spans.forEach(span => {                                         //SE RECORRE CADA ELEMENTO span ENCONTRADO
    span.addEventListener('click', () => {                       //SE AGREGA EVENTO DE CLICK A CADA span
        
        const estilo = window.getComputedStyle(span);           //SE OBTIENE EL ESTILO COMPUTADO ACTUAL DEL span (Incluyendo el tamaño de letra actual)
        const size = parseFloat(estilo.fontSize);               //SE EXTRAE EL VALOR NUMÉRICO DEL TAMAÑO DE LA FUENTE

        span.style.fontSize = (size + 2) + 'px';                //SE INCREMENTA EL TAMAÑO EN 2px Y SE APLICA EL ELEMENTO
    });
});