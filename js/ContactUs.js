
const phone = document.getElementById('telefono');
const phoneRegex1 = /^(\d{2,3}[- ]?){2}\d{4}$/;
const btnsubmit = document.getElementById('btn-enviar');

btnsubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (phoneRegex1.test(phone.value)) {
        alert('Mensaje enviado');
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('asunto').value = '';
        document.getElementById('mensaje').value = '';
    } else {
        alert('El telefono no es valido');
    }
    
});
