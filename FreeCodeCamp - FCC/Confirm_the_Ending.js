// Confirm the Ending - There are 2 Approches to the Problem

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var len_str = str.length;
  console.log(len_str);

  var len_target = target.length;
  console.log(len_target); 

  var output = "";

  for(var i = len_str - len_target; i < str.length; i++){
    output = output + str[i];
  }
  if(output == target){
    return true;
  }
  else{
    return false;
  }
}

confirmEnding("Bastian", "n");


// This is another method using the Slice Function 

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  var len_str = str.length;
  console.log(len_str);

  var len_target = target.length;
  console.log(len_target);

  var output = "";

  output = str.slice(len_str - len_target, len_str);
  console.log(output);

  if(output === target){
    return true;
  }
  else{
    return false;
  }
}

confirmEnding("Bastian", "n");