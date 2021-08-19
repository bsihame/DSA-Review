const bubbleSort = (arr) => {
  let sortArr = arr;
  for(let i = 0; i < arr.length ;i++){
    let hasSwap = false;
    for(let j =0; j<arr.length-1; j++){
      if(arr[j]>arr[j+ 1]){
        hasSwap = true;
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp
      }
    }
    if(!hasSwap) break
    else i++;
  }
  return sortArr
}

console.log(bubbleSort([3,2,1]))


console.log("=========================================")

console.log("Bubble Sort With Helper Function" )

const bubbleSort2 = (arr) => {
  let sortArr = arr;
  for(let i = 0; i < arr.length ;i++){
    let hasSwap = false;
    for(let j =0; j<arr.length-1; j++){
      if(arr[j]>arr[j+ 1]){
        hasSwap = true;
        // helper function 
        arr = swapElements(arr, j, j+1)
      }
    }
    if(!hasSwap) break
    else i++;
  }
  return sortArr
}

const swapElements= (arr, index1, index2)=> {
  let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp
        return arr
}

console.log(bubbleSort2([3,2,1]))