const btnSend = document.querySelector('#sendBtn');

let clicks = 0;

btnSend.addEventListener('click', () => {
    clicks++;                                                   //SE INCREMENTA EL NUMERO DE CLICS

    if (clicks > 3){
        alert('EHH! Relaja la raja...');                        //SI DA MAS DE 3 CICK, SALE EL alert
    }

    setTimeout(() => {
    button.textContent = 'Enviado';
    button.disabled = true;
    }, 1000);

    btnSend.textContent = 'Enviado';                            //SE ENVIA AL DARLE  CLICK

    btnSend.ariaDisabled = true;                                //CUANDO SE ENVÍA, ELE EVENTO SE


});