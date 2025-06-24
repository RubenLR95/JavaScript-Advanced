const cities = [
    'Madrid',
    'Barcelona',
    'Valencia',
    'Sevilla',
    'Zaragoza',
    'Málaga',
    'Murcia',
    'Palma',
    'Bilbao',
    'Alicante'
];

const search = document.querySelector('#search');
const sugg = document.querySelector('#suggestions');

search.addEventListener('input', ()=>{
    const term = search.value.toLowerCase();                     //TOMAMOS EL VALOR ACTUAL Y LO PASAMOS A MINÚSCULAS

    sugg.innerHTML = '';                                                //VACIAMOS LAS SUGERENCIAS PREVIAS

    if(!term)return;                                                    //SI EL TÉRMINO ESTÁ VACÍO, SALIMOS DE LA FUNCIÓN

    cities
        .filter(ci => 
            ci.toLowerCase().startsWith(term)
        )

        .slice(0,5)                                                      //SE QUEDA CON LAS 5 PRIMERAS SUGERENCIAS
        .forEach(ci =>{
            const li = document.createElement('li');                //REAMOS UN NUEVO ELEMENTO li
            li.textContent = ci;                                    //LE ASIGNAMOS EL TEXTO DE LA CCIUDAD
            sugg.appendChild(li);
        });

});


sugg.addEventListener('mousedown', e => {           //SELECCION DE UNA SUGERENCIA (mousedown)
    if(e.target.tagName === 'LI'){                  //COMPROBAMOS QUE EL ELEMENTO SOBRE EL QUE SE HACE EL mousedown  ES UN <li>
        search.value = e.target.textContent;        //RELLENAMOS EL INPUT CON EL TEXTO SELECCIONADO
        sugg.innerHTML = '';
    }
});