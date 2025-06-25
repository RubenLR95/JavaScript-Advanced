// FUNCIÓN QUE DEVUELVE UNA PROMESA PARA OBTENER UNA GEOLOCALIZACIÓN

function obtenerUbicacion(){  // EN ESTA FUNCIÓN SE LLAMA A L API DE GEOLOCALIZACION DEL NAVEGADOR

    return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        pos => {                                    //EXTRAEMOS LATITUD Y LONGITUD
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            resolve({lat,lon});

        },
            // CALLBACK DE ERROR
        err =>{
            reject('No se pudo obtener la ubicación' + err.message);
        }
    );
  });
}


const btn = document.getElementById('locate');
const output = document.getElementById('output');

btn.addEventListener('click', () => {               // AÑADIMOS UN listener AL BOTÓN PARA EVENTO CLICK
    output.textContent = 'obteniendo ubicación...';

    obtenerUbicacion()
        .then(({lat,lon}) => {
            output.textContent = `Latitud: ${lat.toFixed(6)}, Longitud ${lon.toFixed(6)}`;

        })

        .catch(err => {
            output.textContent = err;
        });

});