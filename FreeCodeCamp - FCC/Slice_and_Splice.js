// Basic Algorithm Scripting: Slice and Splice 

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var temp = arr2.slice();
  console.log(temp);

  for(let i = 0; i < arr1.length; i++){
    temp.splice(n, 0, arr1[i]);
    n++;
    console.log(temp);
  }
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);