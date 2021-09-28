/*
Max
Given an array of integers Arr of size N and anumber K. Return the maximum sum of a subarray of size K.
Input: N=4, K=2
Arr = [100,200,300,400]
output: 700
explanation: Arr3 + Arr4 =700
which is maximum.
100|200|300|400

let maxSum = -Infinity
least possible integer 
.     .
i     j
==> [100, 200]--> sum  300 
    => maxSum(300, - Infinity)
    => maxSum = 300

==> [200, 300] --> 500
    =>maxSum-> max(500, 300)
 ==>   
*/