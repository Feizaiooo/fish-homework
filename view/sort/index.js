window.onload = function () {
  window.backHome();
};

const arr =[15,12,1,20,84,13]
const bubbleSort = (arr) =>{
  const array = [...arr]
  for (let i  = 0; i  < array.length; i ++) {
    for (let j = 0; j < array.length; j++) {
      if(array[i] > array[j]){
        let temp = array[i]
        array[i] =  array[j]
        array[j] = temp
      }  
    }
  }
  return array
  
}
const selectSort = (arr)=>{
  const array = [...arr]
  for (let i  = 0; i  < array.length; i ++) {
    let minIndex = i
    for (let j = i+1; j < array.length; j++) {
      if(array[minIndex] < array[j]){
        minIndex = j
      }
    }
    if(minIndex !== i){
      let temp = array[minIndex]
      array[minIndex] =  array[i]
      array[i] = temp
    }
  }
  return array
}

const insertSort = (arr) => {
  const array = [...arr]
  for (let i = 1; i < arr.length; i++) {
    let key = array[i];
    let j = i - 1
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      j = j - 1
    }
    array[j + 1] = key;
  }
  return array
}
const quickSort = (arr) => {
  const array = [...arr]
  if (array.length <= 1) return array;

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left),  ...quickSort(right)];
}

function search(arr, target, start, end) {
  let targetIndex = -1;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    targetIndex = mid;
    return targetIndex;
  }
  if (start >= end) {
    return targetIndex;
  }

  if (arr[mid] < target) {
    return search(arr, target, mid + 1, end);
  } else {
    return search(arr, target, start, mid - 1);
  }
}
const position = search(arr, 84, 0, arr.length - 1);

console.log('bubbleSort',bubbleSort(arr))
console.log('selectSort',selectSort(arr))
console.log('insertSort',insertSort(arr))
console.log('quickSort',quickSort(arr))
console.log('search',position)
