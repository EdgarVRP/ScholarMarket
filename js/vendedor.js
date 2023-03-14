let tabla = document.getElementById("tablaProductos");
let tablaCompradores = document.getElementById("tablaCompradores");
//Realizando peticion get al archivo data.json
var productos=[];
fetch('../vendedor-test/vendedor.json')
  .then(response=>response.json())
  .then(data=>{
    //console.log(data);
    productos = data;
    //console.log(productos);
  }
  ) 
  .catch(function(error) {
    console.error('Error al realizar la petición:', error);
  });
//Estableciendo el id de usuario en localstorage
localStorage.setItem('id', 1);
//Obteniedno id de usuario por localstorage
let id = localStorage.getItem('id');
//timmer de .5 segundos para que se ejecute la peticion get
setTimeout(function(){
//Obteniendo el los datos del usuario por el id en un objeto JSON ubicado en el archivo data.json
//console.log(productos);
let producto = productos.find(vendedor => vendedor.idVendedor == id);
//console.log(producto);
// Agregar cada producto a la tabla.
productos.forEach(function(producto) {
  let fila = tabla.insertRow();
  // Agregar la celda para el nombre del producto y con un id de nombreProducto.
  fila.setAttribute("id", producto.nombre);
  fila.insertCell(0).innerHTML = producto.nombre;
  //a la celda se le agrega un id con el nombre del producto
  
  // Agregar la celda para la imagen del producto.
  let celdaImagen = fila.insertCell(1);
  let imagen = document.createElement("img");
  imagen.src = producto.rutaImagen;
  imagen.width = 100;
  celdaImagen.appendChild(imagen);

  // Agregar la celda para la descripción del producto.
  fila.insertCell(2).innerHTML = producto.descripcion;

  // Agregar la celda para el botón modal de los compradores.
  let celdaModal = fila.insertCell(3);
  let botonModal = document.createElement("button");
  botonModal.setAttribute("class", "btn btn-primary btnCompradores");
  botonModal.setAttribute("data-bs-toggle", "modal");
  botonModal.setAttribute("data-bs-target", "#modalCompradores");
  //añadiendo id al boton
  botonModal.setAttribute("id", producto.idProducto);
  botonModal.innerHTML = "Ver compradores";
  celdaModal.appendChild(botonModal);
  fila.insertCell(4).innerHTML = producto.ventasCompletas;
  //Modal editar producto
  let celdaEditar = fila.insertCell(5);
  let botonEditar = document.createElement("button");
  botonEditar.setAttribute("class", "btn btn-warning btnEditarProducto");
  botonEditar.setAttribute("data-bs-toggle", "modal");
  botonEditar.setAttribute("data-bs-target", "#modalEditarProducto");
  botonEditar.innerHTML = "Editar";
  celdaEditar.appendChild(botonEditar);
  //Modal eliminar producto
  let celdaEliminar = fila.insertCell(6);
  let botonEliminar = document.createElement("button");
  botonEliminar.setAttribute("class", "btn btn-danger");
  botonEliminar.setAttribute("data-bs-toggle", "modal");
  botonEliminar.setAttribute("data-bs-target", "#modalEliminarProducto");
  botonEliminar.innerHTML = "Eliminar";
  celdaEliminar.appendChild(botonEliminar);
});
},500);

//evento para ver compradores
const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, "click", ".btnCompradores", (e) => {
  let fila =tablaCompradores.insertRow();
  let idProducto = e.target.id;
  //console.log(idProducto);
  let producto = productos.find(producto => producto.idProducto == idProducto);
  //console.log(producto);
  let compradores = producto.compradores;
  let ventas = producto.venta;
  //console.log(compradores);
  //console.log(ventas);
  ventas.forEach(function(ventas){
    let fila = tablaCompradores.insertRow();
    fila.insertCell(0).innerHTML = ventas.idVenta;
    fila.insertCell(1).innerHTML = ventas.nombreComprador;
    fila.insertCell(2).innerHTML = ventas.fechaPago;
    fila.insertCell(3).innerHTML = ventas.fechaEntrega;
    fila.insertCell(4).innerHTML = ventas.mensajeAlVendedor;
    //añadiendo boton para aceptar venta
    let celdaAceptar = fila.insertCell(5);
    let botonAceptar = document.createElement("button");
    botonAceptar.setAttribute("class", "btn btn-success");
    botonAceptar.innerHTML = "Aceptar";
    celdaAceptar.appendChild(botonAceptar);
    //añadiendo boton para rechazar venta
    let celdaRechazar = fila.insertCell(6);
    let botonRechazar = document.createElement("button");
    botonRechazar.setAttribute("class", "btn btn-danger");
    botonRechazar.innerHTML = "Rechazar";
    celdaRechazar.appendChild(botonRechazar);

  });
  });

on(document, "click", ".btnCancelarModalCompradores", (e) => {
  tablaCompradores.innerHTML = "";
});
//evento para editar producto
on(document, "click", ".btnEditarProducto", (e) => {
  console.log("Se presiono el boton editar");
  //obteniendo el id de la fila
  let idProducto = e.target.parentNode.parentNode.id;
  //console.log(idProducto);
  //Vaciando datos de la tabla en el modal
  //elemento abuelo de la celda
  let nombreProducto = e.target.parentNode.parentNode.childNodes[0].innerHTML;
  console.log(nombreProducto);
  let descripcionProducto = e.target.parentNode.parentNode.childNodes[2].innerHTML;
  console.log(descripcionProducto);
  let ventasCompletas = e.target.parentNode.parentNode.childNodes[4].innerHTML;
  console.log(ventasCompletas);
});