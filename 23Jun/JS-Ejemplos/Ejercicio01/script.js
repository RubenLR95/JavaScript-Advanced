window.onload = () => {                                     //ESTA FUNCIÓN SE EJECUTA AUTOMÁTICAMENTE CUANDO LA PÁGINA AABA DE CARGARSE
    const miParrafo = document.getElementById ('p1');       //ODTIENE LA REFERENCIA DEL PARRAFO CON SU id
    alert("nodeName: " + miParrafo.nodeName)                //SE MUESTRA LA ALERTA CON EL NOMBRE DEL NODO, EN ESTE CASO "P"
    alert(miParrafo);                                       //SE MUESTRA EN UNA ALERTA EL OBJETO DEL PARRAFO ENTERO
};

