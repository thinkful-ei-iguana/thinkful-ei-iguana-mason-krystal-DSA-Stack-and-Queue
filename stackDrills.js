const Stack = require('./stack');
const starTrek = new Stack();
//questions # 1, 2, 3, 5, 6, 9, 10. 
function main() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(JSON.stringify(starTrek));
  return starTrek;
}
main();

function peek(stack) {
  console.log(stack.top.data);
}
// peek(starTrek);

function isEmpty(stack) {
  if (stack.top === null) {
    return "stack is empty";
  }
  return "stack is NOT empty";
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

function sortStack() {

}