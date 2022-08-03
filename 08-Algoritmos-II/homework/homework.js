'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //[5, 1, 4, 2, 8]
  const aleatorio = array[Math.floor(Math.random() * array.length)];

  if (array.length <= 1) {
    return array;
  }

  const arrayLeft = [];
  const arrayRight = [];
  const arrayEquals = [];

  for (let i = 0; i < array.length; i++) {
        if (aleatorio > array[i]) {
          arrayLeft.push(array[i]);
        }else if(aleatorio < array[i]){
          arrayRight.push(array[i]);
        } else {
          arrayEquals.push(array[i]);
        }
  }

  return quickSort(arrayLeft).concat(arrayEquals).concat(quickSort(arrayRight));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  const half = array[array.length / 2];

  const arrayLeft = [];
  const arrayRight = [];
  const arrayHalf = [];

  for (let i = 0; i < array.length; i++) {

  }

  return mergeSort(arrayLeft).concat(arrayEquals).concat(mergeSort(arrayRight));

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
