//8. Repeat a String, Repeat a String

function repeatStringNumTimes(str, num) {
  // repeat after me
  var output = "";

  if(num < 0){
    return output;
  }
  else{
    for(var i = 0; i < num; i++){ 
    output = output + str;  
  }
  return output;
  }
  console.log(output);  
}

repeatStringNumTimes("abc", 3);