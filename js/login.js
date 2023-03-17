

const iniciar = document.querySelector('#iniciar');
const registro = document.querySelector('#registro');
//Se oculta formulario de registro al pulsar iniciar

document.querySelector('#formRegistro').style.display = 'none';

iniciar.addEventListener('click', () => {
    document.querySelector('#formLogin').style.display = 'block';
    document.querySelector('#formRegistro').style.display = 'none';
});
//Se oculta formulario de iniciar al pulsar registro
registro.addEventListener('click', () => {

    document.querySelector('#formLogin').style.display = 'none';
    document.querySelector('#formRegistro').style.display = 'block';
});



 /*------------TABS FORMULARIO--------*/
const tabLink=document.querySelectorAll('.tab-link');
const formularios=document.querySelectorAll('.formulario');

for(let x=0; x<tabLink.length;x++){
    tabLink[x].addEventListener('click',()=>{
        //removemos la clase active de todos los tabs encontrados
        tabLink.forEach((tab)=> tab.classList.remove('active'));

        //le agregamos la clase active al tab que se le hizo click
        tabLink[x].classList.add('active');

        //mostramos el formulario correspondiente
        formularios.forEach((form)=>form.classList.remove('active'));
        formularios[x].classList.add('active');
    })        
}
/*---------------MOSTRAR CONTRASEÑA-----------*/
const mostrarClave=document.querySelectorAll('.mostrarClave');
const inputPass=document.querySelectorAll('.clave');

for(let i=0; i<mostrarClave.length;i++){
    mostrarClave[i].addEventListener('click',()=>{
        if(inputPass[i].type==="password"){
            //cambiamos el tipo de password a text
            inputPass[i].setAttribute('type','text');
            //removemos la clase del icono
            mostrarClave[i].classList.remove('fa-eye');
            //agregamos el nuevo icono
            mostrarClave[i].classList.add('fa-eye-slash');
            //le agregamos la clave active
            mostrarClave[i].classList.add('active');
        }else{
            //cambiamos el tipo de texto a password
            inputPass[i].setAttribute('type','password');
            //removemos la clase del icono
            mostrarClave[i].classList.remove('fa-eye-slash');
            //agregamos el nuevo icono
            mostrarClave[i].classList.add('fa-eye');
            //le agregamos la clase active
            mostrarClave[i].classList.remove('active');
        }
    });
}

/*------------------VALIDAMOS EL FORMULARIO DE REGISTRO-----¨*/
let nombre,apellido,correo,password,cbx_notify,cbx_terminos;

if(document.getElementById('btnRegistro')){
    const btnRegistro=document.getElementById('btnRegistro');
    //evento click al boton registrar
    btnRegistro.addEventListener('click',(e)=>{
        e.preventDefault();
        const msError=document.querySelector('#formRegistro .error-text');
        msError.innerHTML="";
        msError.classList.remove('active');

        nombre = formRegistro.nombre.value.trim();
        apellido = formRegistro.apellido.value.trim();
        password = formRegistro.password.value.trim();

        cbx_notify=formRegistro.cbx_notify;
        cbx_terminos=formRegistro.cbx_terminos;

        //validamos que los cambos NO ESTAN VACIOS
        if(nombre=="" && apellido=="" && correo=="" && password==""){
            //mostramos error en pantalla
            mostrarError('Todos los campos son obligatorios',msError);
            //le agregamos la clase error a los input
            //le pasamos los daos array
            inputError([formRegistro.nombre,formRegistro.apellido,formRegistro.correo,formRegistro.password]);
            return false;
        }else{
            //removemos esa clase con la sigueinte funcion
            inputErrorRemove([formRegistro.nombre,formRegistro.apellido,formRegistro.correo,formRegistro.password])
        }

        //validamos a cada input
        if(nombre=="" || nombre==null){
            mostrarError('Ingrese su nombre',msError);
            inputError([formRegistro.nombre]);
            formRegistro.nombre.focus();//fijamos en el elemento indicado
            return false;
        }else{
            if(!validamosSoloLetras(nombre)){
                //si es diferente a true
                mostrarError('Ingrese un nombre válido, no se permiten caracteres especiales',msError);
                inputError([formRegistro.nombre]);
                formRegistro.nombre.focus();
                return false;
            }
        }


        //validamos apellido
        if(apellido=="" || apellido==null){
            mostrarError('Ingrese su apellido',msError);
            inputError([formRegistro.apellido]);
            formRegistro.apellido.focus();
            return false;
        }else{
            if(!validamosSoloLetras(apellido)){
                mostrarError('Ingrese un apellido válido, no se permiten caracteres especiales',msError);
                inputError([formRegistro.apellido]);
                formRegistro.apellido.focus();
                return false;
            }
        }

        //validamos correo
        if(correo==null || correo==""){
            mostrarError('Por favor ingrese su correo',msError);
            inputError([formRegistro.correo]);
            formRegistro.correo.focus();
            return false;
        }else{
            if(!validarCorreo(correo)){
                mostrarError('Por favor ingrese un correo valido',msError);
                inputError([formRegistro.correo]);
                formRegistro.correo.focus();
                return false;
            }
        }

        //validamos password
        if(password=="" || password==null){
            mostrarError('Por favor ingrese una contraseña',msError);
            inputError([formRegistro.password]);
            formRegistro.password.focus();
            return false;
        }else{
            //validamos que tenga como minimo 8 caracteres
            if(password.length <= 8){
                mostrarError('Contraseña débil, minimo 8 caracteres',msError);
                inputError([formRegistro.password]);
                formRegistro.password.focus();
                return false;
            }
        }

        //validamos el cbxx-terminos
        if(cbx_terminos.checked==false){
            mostrarError('Por favor aceptar Términos y Condiciones',msError);
            //le agregamos un clase error a su elemento padre
            formRegistro.cbx_terminos.parentNode.classList.add('cbx-error');
            return false;
        }else{
            formRegistro.cbx_terminos.parentNode.classList.remove('cbx-error');            
        }
        //una vez hechas las verificaciones enviaremos el formulario para luego recibirlo con php
        formRegistro.submit();
        return true;
    });

    formRegistro.cbx_terminos.addEventListener('change',(e)=>{
        if(e.target.checked){
            formRegistro.cbx_terminos.parentNode.classList.remove('cbx-error');
        }
    })
}
/*----------------Validamos el formulario login-------*/
if(document.getElementById('btnLogin')){
    const btnLogin = document.getElementById('btnLogin');
    console.log("Estoy vivo");
    btnLogin.addEventListener('click',(e)=>{
        e.preventDefault();

        const msError=document.querySelector('#formLogin .error-text');
        msError.innerHTML="";
        msError.classList.remove('active');

        correo=formLogin.correo.value.trim();
        password=formLogin.password.value.trim();

        if(correo=="" && password==""){
            mostrarError('Por favor ingrese su usuario/contraseña',msError);
            inputError([formLogin.correo,formLogin.password]);
            return false;
        }else{
            inputErrorRemove([formLogin.correo,formLogin.password]);
        }

        if(correo=="" || correo==null){
            mostrarError('Por favor ingrse su correo',msError);
            inputError([formLogin.correo]);
            formLogin.correo.focus();
            return false;
        }

        if(password=="" || password==null){
            mostrarError('Por favor ingrese su contraseña',msError);
            inputError([formLogin.password]);
            formLogin.password.focus();
            return false;
        }

        //enviamos el formulario ESTO ES IMPORTANTE
        formLogin.submit();
        return true;
    })
}
/*.---------------MOSTRAR ERROR----------*/
function mostrarError(mensaje,msError){
    //agregamos la clase active
    msError.classList.add('active');
    msError.innerHTML='<p>'+mensaje+'</p>';
}

/*------------------AGREGAR CLASS ERROR INPUT-----*/
function inputError(datos){
    for (let i = 0; i < datos.length; i++) {
        datos[i].classList.add('input-error');        
    }
}
/*------------VALIDAMOS SOLO LETRAS Y NUMEROS------*/
function validarLetrasNumeros(valor){
    if(!/^[a-zA-Z0-9]+$/.test(valor)){
        return false;
    }
    return true;
}

/*--------------VALIDAAR SOOLO LETRAS--------*/
function validarSoloLetras(valor){
    if(!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]*$/.test(valor)){
        return false;
    }
    return true;
}

/*-----------VALIDAR CORREO----------------*/
function validarCorreo(valor){
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)){
        return false;
    }
    return true;
}

/*-------------VALIDAR SOLO NUMEROS --------------*/
function validarSoloNumeros(valor){
    if(!/^([0-9]{8})*$/.test(valor)){
        return false;
    }
    return true;
}
