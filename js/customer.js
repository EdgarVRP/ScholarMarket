const btnEditarFormulario = document.getElementById('btn-editar-formulario');

let valorOriginalNombre;
let valorOriginalNombreC;

let valorOriginalEmail;
let valorOriginalTelefono;

let valorOriginalUniversidad;



btnEditarFormulario.addEventListener('click', (e) => {
  e.preventDefault();
  const inputNombre = document.getElementById('inputNombre');
  const inputNombreC = document.getElementById('inputNombreC');
  const inputEmail = document.getElementById('inputEmail');
  const inputTelefono = document.getElementById('inputTelefono');
  const selectUniversidad = document.getElementById('universidad');
  const inputContrasena = document.getElementById('inputContrasena');
  const btnEditarFormulario = document.getElementById('btn-editar-formulario');
  var selectedIndex = selectUniversidad.selectedIndex;
  var selectedOption = selectUniversidad.options[selectedIndex];
  const ima=document.getElementById('iconoEditar');
  console.log(selectedIndex);
  console.log(selectedOption);
  if (inputContrasena.readOnly == true) {
    console.log(inputContrasena.value);
    valorOriginalNombre = inputNombre.value;
    inputNombre.readOnly = false;
    valorOriginalNombreC = inputNombreC.value;
    inputNombreC.readOnly = false;

    valorOriginalEmail = inputEmail.value;
    inputEmail.readOnly = false;

    valorOriginalTelefono = inputTelefono.value;
    inputTelefono.readOnly = false;

    // valorOriginalUniversidad = inputUniversidad.value;
    selectUniversidad.disabled = false;
    // ima.display=none;
  ima.classList.add("ocultar-imagen");
    // selectUniversidad.disabled = selectUniversidad.disabled;
    // console.log(selectUniversidad);
    // var selectElement = document.getElementById("universidad");
    // var botonElement = document.getElementById("miBoton");
    

    originalValue = inputContrasena.value;
    inputContrasena.readOnly = false;
    //inputContrasena.style.backgroundColor = "#fff";
    btnEditarFormulario.innerHTML = `Guardar
    <img class="iconos" id="iconoEditar" src="../assets/img/disquete.png" alt="">`;
    // btnEditarFormulario.innerHTML = "Guardar";
    
  } else {

    inputNombre.readOnly = true;
    inputNombreC.readOnly = true;

    inputEmail.readOnly = true;
    inputTelefono.readOnly = true;
    // inputUniversidad.readOnly = true;
    selectUniversidad.disabled = true;
    console.log(inputContrasena.value);
    inputContrasena.readOnly = true;
    //inputContrasena.style.backgroundColor = "#eee";
    // btnEditarFormulario.innerHTML = "Editar";
    btnEditarFormulario.innerHTML = `Editar
    <img class="iconos" id="iconoEditar" src="../assets/img/editar.png" alt="">`;
// ima.display=none;
    var newValue = inputContrasena.value;

    // Aquí podrías guardar los cambios en tu base de datos

    if (newValue !== originalValue) {
      // Aquí podrías mostrar una confirmación al usuario de que los cambios se han guardado
    }
  }
});
var originalValue;


const btnHistorial = document.getElementById("btn-historial");
  btnHistorial.addEventListener("click", function() {
    window.location.href = "../pages/history.html";
  });

