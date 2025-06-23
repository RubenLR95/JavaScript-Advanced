window.onload = () => {                                     //ESTA FUNCIÓN SE EJECUTA AUTOMÁTICAMENTE CUANDO LA PÁGINA AABA DE CARGARSE
    const miParrafo = document.getElementById ('p1');       //ODTIENE LA REFERENCIA DEL PARRAFO CON SU id


    if (miParrafo !== null){                                 //SE COMPRUEBA SI EL ELEMENTO FUÉ ENCONTRADO USANDO UN BOOLEANO
        alert("nodeName: " + miParrafo.nodeName);            //SI EXISTE, MUESTRA EL NOMBRE DEL PÁRRAFO
        alert(miParrafo);                                    //SI NO EXISTE, MUESTRA MENSAJE DE ERRO
    } else{             
        alert("EL elemento con id 'p1'no existe.");
    }


};

