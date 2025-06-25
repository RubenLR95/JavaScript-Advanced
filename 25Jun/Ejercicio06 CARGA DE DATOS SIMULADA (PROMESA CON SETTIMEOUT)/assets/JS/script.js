// FUNCION QUE DEVUELVE UNA PROMESA PARA SIMULAR UNA CARGA DE DATOS

function simularCarga(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
                                            // Math.random = |1 - 0|
            const ok = Math.random() > 0.3; // 70% DE PROBABILIDADES DE ÉXITO
            ok 
              ? resolve({usuario: 'Juan', edad:28})
              : reject('error en la carga');
        }, 1500);
    });
}

document
    .getElementById('btnCargar')
    .addEventListener('click', () => {
        document.getElementById('datos').textContent = 'Cargando...';

        simularCarga()
            .then(info => {
                document.getElementById('datos').textContent = 
                `Usuario: ${info.usuario}\nEdad : ${info.edad}`;
            })
            .catch(err => {
                document.getElementById('datos').textContent = err;
            });
    });