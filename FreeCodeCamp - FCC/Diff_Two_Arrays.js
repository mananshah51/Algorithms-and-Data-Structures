function diffArray(arr1, arr2) {
  var out = [];

  for(let i = 0; i < arr2.length; i++){
    var temp = arr1.includes(arr2[i]);
  
if(temp == false){
  out.push(arr2[i]);
  console.log(out);
    }
  }
  
    for(let i = 0; i < arr1.length; i++){
      var temp = arr2.includes(arr1[i]);
    
    if(temp == false){
      out.push(arr1[i]);
      console.log(out);
    }
  }
  return out;
  }


diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

