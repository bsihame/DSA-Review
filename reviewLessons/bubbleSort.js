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