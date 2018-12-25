//14. Falsy Bouncer - Basic Algorithm Scripting

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var output = [];
  for(let i = 0; i < arr.length; i++){
    var temp = Boolean(arr[i]);
    console.log(temp);
    if(temp){
      output.push(arr[i]);
      console.log(output);
    }
  }
  return output;
}

bouncer([7, "ate", "", false, 9]);