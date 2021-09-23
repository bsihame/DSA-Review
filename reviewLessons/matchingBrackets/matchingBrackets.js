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
