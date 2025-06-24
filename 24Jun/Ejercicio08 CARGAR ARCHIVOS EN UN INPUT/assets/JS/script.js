const imgInput = document.querySelector('#imgInput');
const preview = document.querySelector('#preview');
const errorMsg = document.querySelector('#errorMsg');

imgInput.addEventListener('change', () =>{                          // CUANDO EL USUARIO SELECCIONA UN ARCHIVO...
    preview.style.display = 'none';                                 //LIMPIA LA PREVISUALIZACION Y EL MENSAJE ANTERIOR
    preview.src           = '';
    errorMsg.style.display= 'none';
    errorMsg.textcontnt   = '';

    const file = imgInput.files[0];                                 //COGEMOS EL PRIMER ARCHIVO

    if(!file)return;

    if(!file.type.startsWith('image/')){                            // VALIDACION MIME: VALIDA QUE SEA UN ARCHIVO MULTIMEDIA, EN ESTE CASO, IMÁGENES
        errorMsg.textContent = 'Error. Por favor, selecciona un archivo de imagen.'; 
        errorMsg.style.display = 'block';
        return;
    }

    const reader = new FileReader();                                //CREAMOS UN FileReader PARA QUE LEA LA IMÁGEN
    reader.onload = () => {                                         
        preview.src = reader.result;                                //AL TERMINAR LA LECTURA, ASIGNAMOS LA url  AL img
        preview.style.display = 'block';
    };

    reader.readAsDataURL(file);

});