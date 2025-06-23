const btnContar = document.querySelector('#countBtn');                          //REFERENCIAR EL id="countBtn"
const spanCount = document.querySelector('#count')                              //OBTENER LA REFENCIA DEL span PARA MOSTRAR EL CONTADOR

let contador = 0;                                                               //SE INICIALIZA UNA VARIABLE "contador" CON VALOR 0

btnContar.addEventListener('click', () => {                                     //SE INICIA EL EVENTO LISTENER CLICK. CUANDO EL USUARIO HAGA CLICK SE INICIA ESA FUNCIÓN
    
    contador += 1;                                                              // contador = contador + 1

    spanCount.textContent = contador;

});