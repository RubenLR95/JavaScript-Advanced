// CALBACK : CUANDO ESTÉ LISTA, POR FAVOR MÁNDAME UN MENSAJE.

function pedirPizza(callback){
    console.log("pizza pedida ...");
    setTimeout(() => {
        console.log("Pizza lista");
        callback();
    }, 2000);
}

function avisar(){
    console.log("¡Tu pizza ha llegado");
}

pedirPizza(avisar);

// 2. setTimout = "ESPERAR 'X' TIEMPO, Y LUEGO HACER ALGO"




// 3. Promesa = "TE PROMETO QUE TE AVISO SI LA PIZZA ESTÁ LISTA, SI NO, HAY UN PROBLEMA"

let promesaPizza = new Promise ((resolve, reject) => {
    let pizzaLista = true;

    setTimeout(() => {
        if (pizzaLista) {
            resolve("¡Tu pizza está lista! 🍕 ")
        } 
        else {
            reject("Se quemó la pizza... 😢")
        }
    }, 5000);
});

promesaPizza
    .then((mensaje) => {        //resolve
        console.log("¡Éxito! ", mensaje);
    })

    .catch((error) => {         //reject
        console.log("Error:", error);
    });