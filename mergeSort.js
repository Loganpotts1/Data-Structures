const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  const halfArray = Math.floor(array.length / 2);
  const left = array.splice(0, halfArray);
  const right = array;

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right){
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      merged.push(right[rightIndex]);
      rightIndex++;
    } else {
      merged.push(left[leftIndex]);
      leftIndex++;
    }
  }
  return merged.concat(left.splice(leftIndex)).concat(right.splice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);