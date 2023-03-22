//  Manejamos el estado de si esta logeado o no
let loggedIn;
if(!loggedIn){
    loggedIn = true;
}


// Asignamos el contenedor ul link-list del navbar a una variable llamada linkList
const linkList = document.getElementById("link-list");

const renderNavBar = () => {
    
    linkList.innerHTML = ``;
    if (loggedIn){
        linkList.innerHTML = `
                <li class="nav-item ms-2">
                    <a class="nav-link twhite text-fluid" href="../pages/products.html">Comprar</a>
                </li>
                <li class="nav-item ms-2">
                    <a class="nav-link twhite text-fluid" href="#">Vender</a>
                </li>
                <li class="nav-item ms-2 dropdown ">
                    <a class="nav-link dropdown-toggle twhite text-fluid" href="../pages/customer.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Perfil
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item twhite" href="../pages/customer.html">Mi Perfil</a></li>
                        <li><a class="dropdown-item twhite" href="#">Compras</a></li>
                        <li><a class="dropdown-item twhite" href="../pages/vendedor.html">Ventas</a></li>
                        <li><hr class="dropdown-divider twhite"></li>
                        <li><a class="dropdown-item twhite" href="#" id="logOut">Cerrar Sesión</a></li>
                    </ul>    
                </li>
            `;
            let logOut = document.getElementById('logOut');
            logOut.onclick = () => {
                console.log("Cerraste sesion");
                loggedIn = false;
                renderNavBar();
                console.log(loggedIn);
            }

    }else{
        linkList.innerHTML = `
                <li class="nav-item ms-2">
                    <a class="nav-link twhite text-fluid" href="../pages/products.html">Comprar</a>
                </li>
                <li class="nav-item ms-2">
                    <a class="nav-link twhite text-fluid text-nowrap" href="../pages/login.html" id="logIn">Inicia Sesión</a>
                </li>
            `;
            let logIn = document.getElementById('logIn');
            logIn.onclick = () => {
                console.log("Iniciaste sesion");
                loggedIn = true;
                renderNavBar();
            }
    }
    
}


renderNavBar();


