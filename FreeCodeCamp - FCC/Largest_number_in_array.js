// Find the Largest Number in Array

function largestOfFour(arr) {
  // You can do this!
    var output = [];
    for(var i = 0; i < arr.length; i++ ){
        output.push(Math.max(...arr[i]));
    }
    return output;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);