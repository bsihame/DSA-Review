const basicStackFunctionWithArray = () => {
  const myStack = [];
  myStack.push("a");
  myStack.push("b")
  myStack.push("c")
  myStack.push("d")
  myStack.pop()
  return myStack
}
console.log(basicStackFunctionWithArray())