const slider = document.querySelector('#volumen');
const valor = document.querySelector('#valor');

slider.addEventListener('input', () => {
    const v = slider.ariaValueMax;

    valor.textContent = v; 
    const g = 225 - Math.round(v*2.55);

    document.body.style.backgroundColor = 'rgb(${g},${g},${g})';

});