//Solution No: 1

function destroyer(arr) {

  for(let i = 1 ; i < arguments.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arguments[i] == arr[j]){
          delete arr[j];
      }
    }
  }
return arr.filter(Boolean);
}

destroyer([2, 3, 2, 3], 2, 3);


//Solution No: 2

function destroyer(arr) {
  var remove = [];
  for(let i = 1; i < arguments.length; i++){
    remove.push(arguments[i]);
  }

  var output = arr.filter(item => !remove.includes(item));
  return output;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);