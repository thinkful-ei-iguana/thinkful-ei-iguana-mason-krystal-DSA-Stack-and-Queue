const Stack = require('./stack');
const starTrek = new Stack();
//questions # 1, 2, 3, 5, 6, 9, 10. 

//1
function main() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(JSON.stringify(starTrek));
  return starTrek;
}
main();

//2
function peek(stack) {
  console.log(stack.top.data);
}
// peek(starTrek);

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}
// console.log(isEmpty(starTrek));

function display(stack) {
  if (stack.top === null) {
    return
  }
  console.log(stack.top.data);
  return stack.top.data;
}
// display(starTrek);

//3
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack();
  s.split("").forEach(element => {
    stack.push(element);
  });

  let pal = '';
  while (stack.top !== null) {
    pal += stack.top.data;
    stack.pop();
  }
  return pal === s;
}
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

//5
function sortStack(stack) {
  let newStack = new Stack();
  while (!isEmpty(stack)) {
    let temp = stack.pop();
    while (!isEmpty(newStack) && (peek(newStack) > temp)) {
      stack.push(newStack.pop());
    }
    newStack.push(temp);
  }
  while (!isEmpty(newStack)) {
    stack.push(newStack.pop());
  }
}

let stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(2);
stack.push(8);
sortStack(stack);
console.log(JSON.stringify(stack));


//this is not correct still trying to figure it out


