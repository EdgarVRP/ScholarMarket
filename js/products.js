import {productsList} from './data.js';




function updateProducts() {
    console.log("Si furulo");
    // Obtener el contenedor donde se mostrarán los productos 
    const productContainer = document.getElementById("productContainer");


    // Recorrer el array de productos del carrito y añadir cada uno al productContainer
    productsList.forEach((item) => {
        // Crear una fila para el producto
        const product = document.createElement("div");

        product.className = "product-card";

        // Añadir la imagen, el nombre, el precio, la cantidad y el subtotal de cada producto en nuestro array
        product.innerHTML = `
            <div class="d-flex justify-content-center align-items-center">
                <img class="img-products img-fluid" src="${item.img}" alt="${item.name}">
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center flex-wrap">
                <h3 class="item-name twhite m-3"> <b>${item.name}</b></h3>
                <h4 class="twhite m-3">$${(item.price).toFixed(2)}</h4>
                <button class="add px-2 py-2 main-btn twhite" id=${item.id + 'add'}>
                    Agregar al carrito
                </button>
            </div>
            
            
        `;
        let botones =  document.getElementsByClassName('main-btn');
        // Añadir la fila al tbody
        productContainer.appendChild(product);

        product.addEventListener("mouseover", function (event) {

            setTimeout(()=>{
                //highlight the mouseover target
                product.innerHTML = `
                    <div class="d-flex justify-content-center align-items-center">
                        <img class="img-products img-fluid" src="${item.img}" alt="${item.name}">
                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <h3 class="item-name twhite m-3"> <b>${item.name}</b></h3>
                        <h4 class="twhite m-3">$${(item.price).toFixed(2)}</h4>
                        <button class="add px-2 py-2 btn-azulito twhite" id=${item.id + 'add'}>
                            Agregar al carrito
                        </button>
                    </div>
                `;  

            },100);
        },false);

        product.addEventListener("mouseout", function (event) {

            setTimeout(()=>{
                //highlight the mouseover target
                product.innerHTML = `
                    <div class="d-flex justify-content-center align-items-center">
                        <img class="img-products img-fluid" src="${item.img}" alt="${item.name}">
                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <h3 class="item-name twhite m-3"> <b>${item.name}</b></h3>
                        <h4 class="twhite m-3">$${(item.price).toFixed(2)}</h4>
                        <button class="add px-2 py-2 main-btn twhite" id=${item.id + 'add'}>
                            Agregar al carrito
                        </button>
                    </div>
                `;
            },100);
            

            
        },false);

        
    });

    
}

updateProducts();
