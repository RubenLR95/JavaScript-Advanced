window.onload = () => {                                     //ESTA FUNCIÓN SE EJECUTA AUTOMÁTICAMENTE CUANDO LA PÁGINA AABA DE CARGARSE
    const divs = document.getElementsByTagName("div");       //PARA OBTENER TODOS LOS ELEMENTOS div DEL HTML

    if (divs.length >= 2){                                  //SE COMPRUEBA SI AL MENOS HAY DOS ELEMENTOS div
        const segundoDiv = divs[1];                         //SE ACCEDE AL SEGUNDO div (INDICIE 1, POR QUE TODA LISTA DE ELEMENTOS COMIENZA CON 0)
        const listaP = segundoDiv.getElementsByTagName("p");//SE MUESTRA UNA LISTA CCON TODOS LOS DIVS ENCONTRADOS

        alert("Número de párrafos en el 2º div en la página: " + listaP.length);

    }
    else {                                                  //SI NO HAY AL MENOS DOS DIV SEMUESTRA ALERTA
        alert("No hay al enos dos <div> en la página.");
    }

};


