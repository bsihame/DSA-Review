function countdown(n) {
  console.log("n is:", n)
  if(n === 0) return;
  // recursive call
  countdown(n-1)
}
countdown(5)
/*
//=================explanation==============//
n: 5
countdown(5)

===> console.log(5)
countdown(5-1=4)
===> console.log(4)
countdown(4-1 = 3)
===> console.log(3)
.
.
countdown(1-1 =0)==> Base case return
*/