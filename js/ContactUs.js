
const phone = document.getElementById('telefono');
const phoneRegex1 = /^(\d{2,3}[- ]?){2}\d{4}$/;
const btnsubmit = document.getElementById('btn-enviar');

btnsubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (phoneRegex1.test(phone.value)) {
        alert('Mensaje enviado');
        console.log(phone.value);
    } else {
        alert('El telefono no es valido');
    }
});
