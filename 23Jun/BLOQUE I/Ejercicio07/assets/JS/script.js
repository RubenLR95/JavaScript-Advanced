const form = document.querySelector('#myform');
const input = document.querySelector('#textimput');
const out = document.querySelector('#output');

form.addEventListener('submit', e => {
    e.preventDefault();                     //EVITA QUE EL FORMULARIO RECARGUE LA PÁGINA
    const texto = input.value.trim();       //OBTIENE EL VALOR DEL INPUT Y ELIMINA ESPACIOS

    if (texto){                                         //SI EL USUARIO ESCRIBIÓ ALGGO (TEXTO NO VACÍO)
        out.textContent = `Has escrito: ${(texto)}`;    //MUESTRA EL TEXTO INTRODUCIDO DENTRO DEL ELEMENTO output
        input.value = '';
    }
    else{                                               //SIE EL USUAIO NO ESCRIBE NADA...
        output.textContent = 'Por favor, escribe algo';
    }
});