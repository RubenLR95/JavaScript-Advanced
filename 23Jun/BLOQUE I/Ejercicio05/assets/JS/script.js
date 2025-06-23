const ul = document.querySelector('#itemList');                     // SELECCIONO EL ELEMENTO ul CON id="itemList"

ul.addEventListener('click', e => {                                 // CUANDDO SE HACE CLICK DENTRO DEL ul

    if(e.target.tagName === 'LI'){                                  // SI EL ELEMENTO CLICADO ES UN li 
        e.target.classList.toggle('selected');                      // ALTERNA LA CLASE selected EN ESE li. SI LA TIENE, SE LA QUITA, SI NO, SE LA AGREGA

    }

});

ul.addEventListener('dblclick', e => {                              // CUANDDO SE HACE DOBLE CLICK DENTRO DEL ul

    if(e.target.tagName === 'LI'){                                  // SI EL ELEMENTO CLICADO ES UN li 
        e.target.remove();                                          //SE ELEIMINA EL li DE LA LISTA                                          

    }

});


