// Cargar el archivo JSON

fetch('../JSON/productos.json')
    .then(response => response.json())
    .then(data => {
        // Obtener la tabla
        const tabla = document.getElementById('tablaProductos');

        // Agregar cada registro a la tabla
        data.forEach(producto => {
            // Crear una nueva fila
            const fila = document.createElement('tr');

            // Agregar las celdas de cada columna
            fila.innerHTML = `
        <td hidden>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td><img src="${producto.imagen}" alt="${producto.nombre}"></td>
        <td>${producto.descripcion}</td>
        <td>${producto.vendedor}</td>
        <td>
          <a href="../assets/pdf/comprobante(ejemplo).pdf" download>
            <img class="iconos" src="../assets/img/archivo.png" alt="Archivo de descarga">
          </a>
        </td>
        <td>
        <button onclick="eliminarElemento()">
          <img class="iconos" src="../assets/img/bote-de-basura.png" alt="Icono de basura id="eliminar">
        </button>
          </td>
      `;

            // Agregar la fila a la tabla
            tabla.appendChild(fila);
        });
    })
    .catch(error => console.error(error));


// const btnEliminar=document.getElementById('')
function eliminarElemento() {
    tablaProductos.deleteRow(2);
}

