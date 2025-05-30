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
 
    const lista = document.getElementById('notasLista');
    lista.innerHTML = ''; // Limpiamos la lista antes de mostrar
  
    for (let i = 0; i < notas.length; i++) {
      lista.innerHTML += `Nota ${i + 1}: ${notas[i]}<br>`;
    }
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
    resultado.textContent = 'Promedio: ' + promedio + ' Aprobado';
  } else {
    resultado.textContent = 'Promedio: ' + promedio + ' Reprobado';
  }
}
