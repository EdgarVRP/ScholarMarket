const  formulario = document.querySelector('#formulario');

const  maileador = document.querySelector('#maileador');


formulario.addEventListener('submit', handleSumbit);

function handleSumbit(event){
    event.preventDefault();
    const formularioCompleto = new FormData(this);
    console.log(formularioCompleto.get('nombre'))
    maileador.setAttribute('href', `mailto:mimikprime@gmail.com?subject=nombre ${formularioCompleto.get('nombre')} asunto ${formularioCompleto.get('asunto')}&body=${formularioCompleto.get('mensaje')} email ${formularioCompleto.get('email')} telefono ${formularioCompleto.get('telefono')}`)
    maileador.click();
}