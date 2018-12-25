// 2. Reversing a String
// https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb

function reverseString(str) {
  var array = str.split("");
  console.log(array);

  var reverse = array.reverse();
  console.log(reverse);

  var output = reverse.join("");
  console.log(output);
}

reverseString("hello");