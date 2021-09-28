/*
https://www.hackerrank.com/challenges/compare-the-triplets/problem

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.
Sample Input 1

a = [17, 28, 30]
b= [99, 16, 8]
Sample Output 1

[2, 1]
*/


function compareTriplets(a, b) {
        
  let sumAlice = 0 ;
  let sumBob = 0 ;
  for (let i = 0; i < 3; i++){
          if(a[i] > b[i]){
               sumAlice ++
          } else if(a[i] < b[i]){
              sumBob ++;
          }
  }
  return [sumAlice, sumBob]
  
}
