
// Activa o desactiva el menú en dispositivos móviles:

document.getElementById("boton-menu").addEventListener("click", () => {
    
    let menu = document.getElementById("menu-encabezado");

    if (menu.style.display == "" || menu.style.display == "none") {
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }

});

