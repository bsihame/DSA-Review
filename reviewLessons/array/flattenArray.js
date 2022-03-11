
//=========================================
const flattenIterative = (arr) => {
//[1, [2,[3]], [4]]
// 0,    1   ,  2;
// value = 1

//[[2,[3]], [4]]
//    0,    1   ;
// [2,[3]]==> yes
// [[3], [4]]
// value = 2
// [[3], [4]]
// value = [3] => yes
// [3, [4]]
// 3==> push
//[[4]]
//value =[4];
// [4]
//value =4
// No
//push(4)
// [] no
//hit the base case
//return  // output = [1, 2, 3, 4]


let output = [];
// output = [1, 2, 3, 4]
while(arr.length){
  let value = arr.shift();
  console.log("value 101:", value)
  if(Array.isArray(value)) {
    arr = value.concat(arr);
    console.log("arr 102: ", arr )
  } else {
    output.push(value)
    console.log("output 107: ", output)
  }
}
return output
}

console.log(flattenIterative([1, [2,[3]], [4]]))