const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        const temp =  array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

bubbleSort(numbers);
console.log(numbers);