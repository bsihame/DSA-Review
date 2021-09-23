/*
https://leetcode.com/problems/valid-parentheses/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

const matchingBrackets = (str) => {
  let stack = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
    } else if (stack[stack.length - 1] === map[str[i]]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length ? false : true;
};
console.log(matchingBrackets("()[]{}")); // true
console.log(matchingBrackets("(]")); //false
console.log(matchingBrackets("([)]")); //false
console.log(matchingBrackets("{[]}")); // true
console.log(matchingBrackets("")); // true
