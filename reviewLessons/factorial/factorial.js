function FirstFactorial(num) {
	if (num > 0) {
			return num * FirstFactorial(num - 1);
	} else {
			return 1;
	}
}
console.log(FirstFactorial(8));
function FirstFactorial1(num) { 

  // code goes here  
      let tempNum=1;
    for(i=1;i<num+1;i++){
        tempNum=tempNum*i
    }
    return tempNum; 
         
}
console.log(FirstFactorial1(8));

function FirstFactorial2(num) { 

  var res = 1;
  for (var i = 2; i <= num; i++) {
    res *= i;
  }
  
  // code goes here
  return res; 
            
}
console.log(FirstFactorial2(8));

function FirstFactorial3(num) { 
  return (num === 1 ? 1 : num * FirstFactorial(num - 1));
}
console.log(FirstFactorial3(8));


