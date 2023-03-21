let tabla = document.getElementById("tablaProductos");
let tablaCompradores = document.getElementById("tablaCompradores");

if (localStorage.getItem("productos") === null) {
  //Realizando peticion get al archivo data.json si no hay datos en local storage
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
}
else{
  //Obteniendo datos de local storage
  productos = JSON.parse(localStorage.getItem('productos'));
}
//Estableciendo el id de usuario en localstorage
localStorage.setItem('id', 1);
//Obteniedno id de usuario por localstorage
let id = localStorage.getItem('id');
//timmer de .5 segundos para que se ejecute la peticion get
let productosLocalStorage =[];
setTimeout(function(){
  //Vaciando datos de JSON a local storage
//console.log(productos);
localStorage.setItem('productos', JSON.stringify(productos));
//Obteniendo datos de local storage
productosLocalStorage = JSON.parse(localStorage.getItem('productos'));
//console.log(productosLocalStorage);
// Agregar cada producto a la tabla.
productosLocalStorage.forEach(function(producto) {
  let fila = tabla.insertRow();
  // 0-Nombre del producto.
  fila.setAttribute("id", producto.nombre);
  fila.insertCell(0).innerHTML = producto.nombre;
  //a la celda se le agrega un id con el nombre del producto
  
  // 1-Imagen del producto.
  let celdaImagen = fila.insertCell(1);
  let imagen = document.createElement("img");
  //imagen.src = "data:image/png;base64," + base64String;
  imagen.src = producto.rutaImagen;
  imagen.width = 100;
  celdaImagen.appendChild(imagen);

  // 2-Descripcion del producto.
  fila.insertCell(2).innerHTML = producto.descripcion;
  // 3-Precio del producto.
  fila.insertCell(3).innerHTML = producto.precio;
  // 4-Categoria del producto.
  fila.insertCell(4).innerHTML = producto.categoria;
  // 5-Lugar de venta del producto.
  fila.insertCell(5).innerHTML = producto.lugarVenta;
  // 6-Modal compradores.
  let celdaModal = fila.insertCell(6);
  let botonModal = document.createElement("button");
  botonModal.setAttribute("class", "btn btn-primary btnCompradores");
  botonModal.setAttribute("data-bs-toggle", "modal");
  botonModal.setAttribute("data-bs-target", "#modalCompradores");
  //añadiendo id al boton
  botonModal.setAttribute("id", producto.idProducto);
  botonModal.innerHTML = "Ver compradores";
  celdaModal.appendChild(botonModal);
  // 7-ventas completas.
  fila.insertCell(7).innerHTML = producto.ventasCompletas;
  
  // 8-Modal editar producto
  let celdaEditar = fila.insertCell(8);
  let botonEditar = document.createElement("button");
  botonEditar.setAttribute("class", "btn btn-warning btnEditarProducto table-col-sm-12");
  botonEditar.setAttribute("data-bs-toggle", "modal");
  botonEditar.setAttribute("data-bs-target", "#modalEditarProducto");
  botonEditar.innerHTML = "Editar";
  celdaEditar.appendChild(botonEditar);
  // 9-Modal eliminar producto
  let celdaEliminar = fila.insertCell(9);
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
on(document, "click", "#btnCerrarModalCompradores", (e) => {
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
  let descripcionProducto = e.target.parentNode.parentNode.childNodes[2].innerHTML;
  let precioProducto = e.target.parentNode.parentNode.childNodes[3].innerHTML;
  let CategoriaProducto = e.target.parentNode.parentNode.childNodes[4].innerHTML;
  let lugarVentaProducto = e.target.parentNode.parentNode.childNodes[5].innerHTML;
  document.getElementById("editarNombreProducto").value = nombreProducto;
  document.getElementById("editarDescripcionProducto").value = descripcionProducto;
  document.getElementById("editarPrecioProducto").value = precioProducto;
  document.getElementById("editarCategoriaProducto").value = CategoriaProducto;
  document.getElementById("editarLugarVentaProducto").value = lugarVentaProducto;

});

//evento para añadir producto
const btnCrearProducto = document.getElementById("btnCrearProducto");
on(document, "click", "#btnCrearProducto", (e) => {
  //e.preventDefault();
  console.log("Se presiono el boton crear producto");
  //obteniendo el id de la fila
  let nombreProducto = document.getElementById("nombreProducto").value;
  let descripcionProducto = document.getElementById("descripcionProducto").value;
  let precioProducto = document.getElementById("precioProducto").value;
  let CategoriaProducto = document.getElementById("CategoriaProducto").value;
  let lugarVentaProducto = document.getElementById("lugarVentaProducto").value;
  let imagenProducto = document.getElementById("imagenProducto").value;
  //Guardando imagen en el local storage
  console.log(nombreProducto);
  console.log(descripcionProducto);
  console.log(precioProducto);
  console.log(CategoriaProducto);
  console.log(lugarVentaProducto);
  console.log(imagenProducto);
  //añadiendo producto al local storage
  let producto = {
    idProducto: 0,
    nombre: nombreProducto,
    descripcion: descripcionProducto,
    precio: precioProducto,
    categoria: CategoriaProducto,
    lugarVenta: lugarVentaProducto,
    rutaImagen: imagenProducto,
    ventasCompletas: 0,
    compradores: [],
    venta: []
  };
  console.log(producto);
  productosLocalStorage.push(producto);
  console.log(productosLocalStorage);
  localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
});