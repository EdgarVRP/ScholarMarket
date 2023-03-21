// Array que almacena los productos del carrito
let cartItems = [
    {
    id: 1,
    quantity: 1,
    name:'Finn bebe',
    description:'El unico humano de hora de aventura',
    price: 90.87,
    stock: 50,
    img:'https://i.pinimg.com/originals/a5/28/e7/a528e71cde76d4d1531791e64450706c.png',
    },
    {
    id: 2,
    quantity: 1,
    name:'Jake',
    description:'Cheese & Onion Chips',
    price: 10.50,
    stock:15,
    img:'https://www.ecured.cu/images/c/c0/Jake_.jpg',
    },
    {
    id: 3,
    quantity: 1,
    name:'Rey helado',
    description:'Rey helado',
    price: 758.62,
    stock:10,
    img:'https://images4.wikia.nocookie.net/__cb20120829015908/adventuretimespain/es/images/3/38/ReyHelado.png',
    }

];

// Función para mostrar los productos del carrito y actualizar el total y subtotal
function updateCart() {
    console.log("Si furulo");
    // Obtener el tbody donde se mostrarán los productos del carrito
    const cartBody = document.getElementById("cart-items");
    // Obtener el td donde se mostrará el total del carrito
    const cartTotal = document.getElementById("cart-total");
    // Reiniciar el contenido del tbody y el total
    cartBody.innerHTML = "";
    cartTotal.innerHTML = "$0";

    // Recorrer el array de productos del carrito y añadir cada uno al tbody
    cartItems.forEach((item) => {
        // Crear una fila para el producto
        const row = document.createElement("div");
        row.className = "row";
        // Añadir las celdas con la imagen, el nombre, el precio, la cantidad y el subtotal
        row.innerHTML = `
            <div class="col-5 col-md-4">
                <img class="img-products img-fluid" src="${item.img}" alt="${item.name}">
            </div>
            <div class="col-7 col-md-6 d-flex justify-content-start align-items-between flex-column flex-wrap">
                <b><h3 class="item-name">${item.name}</h3></b>
                <br>
                <p class="description">${item.description}</p>
            </div>

            <div class="col-12 col-md-2 d-flex flex-row-reverse flex-md-column no-wrap align-items-center justify-content-between my-2">
                <h4>$${item.price * item.quantity}</h4>
                <div d-flex flex-row justify-content-center align-items-center no-wrap>
                    <button class="less px-2 py-2 secondary-btn " id=${item.id}>-</button>
                    <span class="m-2">${item.quantity}</span>
                    <button class="more px-2 py-2 main-btn twhite " id=${item.id + 1000}>+</button>
                </div>
                <button class="delete px-2 py-2 alert-btn " id=${item.id + 2000}>
                    <img class="img-thrash" src="../assets/img/botebasura.png">
                </button>
            </div>
            <hr>
        `;
        // Añadir la fila al tbody
        cartBody.appendChild(row);
    });
    // Calcular el total del carrito
    const cartTotalValue = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    // Mostrar el total del carrito
    cartTotal.innerHTML = `$${cartTotalValue}`;
}

// Función para añadir un producto al carrito
function addToCart(product) {
    // Buscar si el producto ya está en el carrito
    const index = cartItems.findIndex((item) => item.name === product.name);
    if (index !== -1) {
        // Si el producto ya está en el carrito, aumentar su cantidad
        cartItems[index].quantity++;
    } else {
        // Si el producto no está en el carrito, añadirlo
        cartItems.push({
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
    }
    // Actualizar el carrito
    updateCart();
}


// Evento para añadir un producto al carrito cuando se hace clic en el botón "Añadir al carrito"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const product = {
            name: event.target.dataset.name,
            price: parseFloat(event.target.dataset.price),
            image: event.target.dataset.image,
        };
        addToCart(product);
    });
});
updateCart(); //Borrarse cuando funcione el agregar productos