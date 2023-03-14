formulario.addEventListener('submit', handleSumbit);

const phone = document.getElementById('telefono');
const phoneRegex1 = /^(\d{2,3}[- ]?){2}\d{4}$/;
const btnsubmit = document.getElementById('btn-enviar');

// btnsubmit.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (phoneRegex1.test(phone.value)) {
//         alert('Mensaje enviado');
//         console.log(phone.value);
//     } else {
//         alert('El telefono no es valido');
//     }
// });


// Enviar como correo la informacion

const  formulario = document.querySelector('#formulario');
const  maileador = document.querySelector('#maileador');


formulario.addEventListener('submit', handleSumbit);

function handleSumbit(event){
    event.preventDefault();
    

    if (phoneRegex1.test(phone.value)) {
        const formularioCompleto = new FormData(this);
        console.log(formularioCompleto.get('nombre'))
        maileador.setAttribute('href', `mailto:mimikprime@gmail.com?subject=nombre ${formularioCompleto.get('nombre')} asunto ${formularioCompleto.get('asunto')}&body=${formularioCompleto.get('mensaje')} email ${formularioCompleto.get('email')} telefono ${formularioCompleto.get('telefono')}`)
        maileador.click();

        alert('Mensaje enviado');
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('asunto').value = '';
        document.getElementById('mensaje').value = '';
    } else {
        alert('El telefono no es valido');
    }

    
    
}