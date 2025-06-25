// CALLBACK: ES UNA FUNCIÓN QUE, EN EL CASO DEL EJEMPLO DE ABAJO, SE EJECUTARÁ DESPUÉS DEL SALUDO

function saludar(nombre, callback){     //DEFINIMOS FUNCION CON DOS PARÁMETROS.
    console.log("Hola "+ nombre);
    callback();                         //PERMITE EJECUTAR UN CÓDIGO ADICIONAL
}

function despedirse(){                  //DEFINIMOS LA FUNCIÓN despedirse SIN PARÁMETROS. ESTA FUNCIÓN SOLO DA EL MENSAJE DE SALIDA
    console.log("¡Adiós!");
}

saludar("Daniel",despedirse); //LA FUNCIÓN DESPEDIRSE ESTÁ COMO callback, PARA QUE SE EJECUTE TRAS EL SALUDO



function leerArchivo(callback){          // DEFINE LA FUNCIÓN leerArchivo Y RECIBE SOLO UN PARÁMETRO, QUE ES EL callback
    setTimeout(() => {
        console.log("Archivo leido");
        callback();
    }, 2000); 
}

leerArchivo(() => {                     //LLAMAMOS A LEER ARCHIVO PASANDO POR UN callback anónimo ( => )
    console.log("Siguiente paso");
});

// SETTIMEOUT : PROGRAMA UNA FUNCIÓN PARA QUE SE EEJECUTE MAS TARDE

console.log("Antes");                   //ESTAMOS PRGRAMANDO UN setTimeout PARA QUE SE EJECUTE TRES SEGUNDOS MAS TARDE

setTimeout(() => {                      //ESTO NO ROMPE EL FLUJO DEL PROGRAMA
    console.log("Despues de tres segundos");
}, 3000);

console.log("Después");


// PROMESAS (promises)

let promesa = new Promise((resolve,reject) => {     //EL CONSTRUCTOR Promise RECIBE LA FUNCIÓN DE DOS PARÁMETROS: resolve(cuando la operacion es exitosa) y reject(cuando hay un error)
    let exito = true;

    setTimeout(() => {                              //USAMOS setTimeout PARA EMULAR LA OPERACIÓN EXITOSA
        if(exito){
            resolve("¡Exito!");
        }else{
            reject("Error");
        }
    }, 5000);
});

promesa
    .then((resultado) => {                         //ESTE callback RECIBE COMO ARGUMENTO EL VALOR PASADO A resolve()
        console.log("Resultado: " + resultado);
    })
    .catch((error) =>{                              // ESTE callback RECIBE COMO ARGUMENTO EL VALOR PASADO A reject()
        console.error("Error: "+ error);
    });