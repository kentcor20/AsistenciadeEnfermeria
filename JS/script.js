// Obtenemos el botón y la sección de servicios por su ID
const cambiarColorBtn = document.getElementById("cambiarColor");
const seccionServicios = document.querySelector(".servicios");

// Agregamos un evento de clic al botón
cambiarColorBtn.addEventListener("click", () => {
    // Generamos un color aleatorio en formato hexadecimal
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Cambiamos el color de fondo de la sección de servicios
    seccionServicios.style.backgroundColor = randomColor;
});
