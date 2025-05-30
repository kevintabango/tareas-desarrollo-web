// Array para almacenar las notas ingresadas
let notas = [];
// Función para agregar una nota al array y mostrarla en pantalla
function agregarNota() {
  const input = document.getElementById('notaInput');
  const nota = parseFloat(input.value);
  // Verifica si la nota es un número válido entre 0 y 10
  if ( nota >= 0 && nota <= 10) { 
    notas.push(nota);
// llamar a la función para mostrar las notas
    mostrarNotas(); 
    input.value = ''; 
    input.focus();
    //mandamos un alert para mostar que la nota esta fuera de rsango
  } else {
    alert('Ingresa una nota válida entre 0 y 10');
  }
}
// Función para mostrar las notas agregadas
function mostrarNotas() {
  
  const contenedor = document.getElementById("notasLista");
  contenedor.innerHTML = ""; 
  notas.forEach(nota => {
    const div = document.createElement("div");
    div.className = "nota";
    div.textContent = "Nota: " + nota;
    contenedor.appendChild(div);
  });
}
// Función para calcular 
function calcularPromedio(notas) {
  if (notas.length === 0) {
    alert('No hay notas para calcular el promedio');
    return;
  }
  //definimos una variable para almacenar la suma de las notas
  let suma = 0;
  // Recorremos el array de notas y sumamos sus valores
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  // Calculamos el promedio dividiendo la suma por la cantidad de notas
  let promedio = suma / notas.length;
  let resultado = document.getElementById('resultado');
// Mostramos el resultado en pantalla dependiendo del promedio
  if (promedio >= 7) {
    resultado.style.color = 'green';
    resultado.textContent = 'Promedio: ' + promedio + ' Aprobado ';
  } else {
    // Si el promedio es menor a 7, mostramos un mensaje en rojo
    resultado.style.color = 'red';
    resultado.textContent = 'Promedio: ' + promedio + ' Reprobado';
  }
}



//FUNCIONES DE EJRCICIOS VERIFICA SI ES MAYOR DE EDAD

function validarEdad() {
      const edad = parseInt(document.getElementById("inpEdad").value);
      const resultado = document.getElementById("resultado2");
//verifica si la edad es un número válido
      if ( edad < 0) {
       alert("Por favor, ingresa una edad válida.");
  // caso contrario, verifica si la edad es mayor o menor de edad
      } else if (edad >= 18) {
        resultado.textContent = " Eres mayor de edad.";
        resultado.style.color = "green";
      } else {
        // Si la edad es menor de 18, muestra un mensaje en rojo
        resultado.textContent = " Eres menor de edad.";
        resultado.style.color = "red";
      }
    }







// FUNCIONES DE EJERCICIO DE CONJETURA DE COLLATZ
function ejecutarCollatz() {
  const input = document.getElementById("numero");
  const resultado = document.getElementById("resultado3");
  const valor = parseInt(input.value);

  // Limpiar resultado previo
  resultado.innerHTML = "";
// Validar que el valor ingresado sea un número entero positivo
  if (isNaN(valor) || valor <= 0) {
    resultado.innerHTML = "<div class='error'>Por favor, ingresa un número entero positivo.</div>";
    return;
  }

  let numero = valor;
  let paso = 0;

  // Mostrar número inicial
  const inicio = document.createElement("div");
  inicio.className = "cuadro";
  inicio.textContent = `Número inicial: ${numero}`;
  resultado.appendChild(inicio);
// Iniciar iteración de la conjetura de Collatz
  while (numero !== 1) {
    if (numero % 2 === 0) {
      numero = numero / 2;
    } else {
      numero = 3 * numero + 1;
    }
    paso++;
// Mostrar cada iteración
    // Crear un nuevo div para mostrar la iteración
    const iteracion = document.createElement("div");
    iteracion.className = "cuadro";
    iteracion.textContent = `Iteración ${paso}: ${numero}`;
    resultado.appendChild(iteracion);
  }

  // Mostrar número final (cantidad de pasos)
  const final = document.createElement("div");
  final.className = "cuadro-final";
  final.textContent = `Número de pasos: ${paso}`;
  resultado.appendChild(final);
}
