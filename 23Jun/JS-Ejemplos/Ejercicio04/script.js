window.onload = () => {                                     //ESTA FUNCIÓN SE EJECUTA AUTOMÁTICAMENTE CUANDO LA PÁGINA AABA DE CARGARSE
    const divIntro = document.getElementById('intro');      //1. SE BUSCA EL div CON id="intro"

    if (divIntro){                                          //PRIMER div CON id="intro", se le asigna color de fondo amarillo
        divIntro.style.backgroundColor = "yellow";
    }

    const segundoDiv = divIntro?.nextElementSibling;        //SIGNAMOS VARIABLE AL SEGUNDO div PARA QUE ACCEDA AL SEGUNDO div="intro"

    if(segundoDiv){                                         //CAMBIA EL COLOR DE LAS LETRA A AZUL
        segundoDiv.style.color = 'blue';
    }



   
};


