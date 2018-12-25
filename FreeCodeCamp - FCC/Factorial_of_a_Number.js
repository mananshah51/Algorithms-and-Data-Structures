// FreeCodeCamp = Factorial of a Number 

function factorialize(num) {
  if(num > 0){
    for(var i = num - 1; i > 0; i--){
        num = num * i;
    }
  }
  else{
    return 1;
  }
  return num;
}

factorialize(5);