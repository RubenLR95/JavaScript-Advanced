const thumbs = document.querySelectorAll('.thumb');            //CON querySelectorAll SELECCIONAMOS TODOS LOS ELEMENTOS INDICADOS EN LOS PARENTESIS
thumbs.forEach(img => {                                        //SE RECORRE CADA UNO DE LOS ELEMENTOS SELECCIONADOS
    img.addEventListener('mouseover', () => {
        img.style.opacity = '0.5' ;                            //SE REDUCE LA OPACIDAD DE LA IMAGEN AL 50% CUANDO EL CURSOR PASA POR ENCIMA DE LA IMAGEN

    });
    img.addEventListener('mouseout', () => {                   //AL RETIRAR EL CURSOR DE LA IMAGEN, VUELVE A SU OPACIDAD NORMAL
        img.style.opacity = '1';
    });

});  