//funcion para ingresar el nombre y mostrarlo
function Saludar() {
    var nombre = document.getElementById('nombre').value;
    var resultado = document.getElementById('spaResultado');

  
        resultado.textContent = "Mi nombre es: " + nombre;
    }