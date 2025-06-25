// SETIMEOUT

console.log("¡Hola! Quiero un helado de vainilla, por favor.😁");

function pedirHelado(){
    setTimeout(() => {
    console.log("¡Buenas! ¿una bola, o dos?")
}, 2000);
setTimeout(() => {
    console.log("mmm...")
}, 2000);
setTimeout(() => {
    console.log("¡Dos!, por favor")
}, 5000);
setTimeout(() => {
    console.log("!Marchando!")
}, 2000);

setTimeout(() => {
    console.log("Tu helado de dos bolas de vainilla! ¡Que aproveche!");
}, 5000);
setTimeout(() => {
    console.log("¡Muchas gracias!");
        
}, 1500);
};


//PROMESA



let promesaHelado = new Promise ((resolve, reject) => {
    let HeladoListo = true;

    setTimeout(() => {
        if (HeladoListo) {
            resolve("Tu helado de dos bolas de vainilla! ")
        } 
        else {
            reject("No nos queda helado de vainilla...")
        }
    }, 5000);
});

promesaHelado
    .then((mensaje) => {        //resolve
        console.log("¡Listo! ", mensaje);
    })

    .catch((error) => {         //reject
        console.log("Vaya...", error);
    });



// CALLBACK


function pedirHelado(callback){
    console.log("Hola! Quiero un helado de vainilla, por favor");
    setTimeout(() => {
        console.log("¡Marchando!");
        callback();
    }, 2000);
}

function avisar(){
    console.log("Aquí tienes tu helado");
}

pedirHelado(avisar);


