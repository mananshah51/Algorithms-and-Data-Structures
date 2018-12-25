function sumAll(arr) {
  //Finding the Miniumum number in the array
  var min_num = Math.min(...arr);

  //Finding the Maximum Number in the array 
  var max_num = Math.max(...arr);

  //Declaring a empty array
  var num = [];

  for(let i = min_num; i <= max_num; i++){
      num.push(i);
  }

  var final = 0;
  
  for(let i = 0; i < num.length; i++){
    var final = num[i] + final;
    console.log(final);
  }
  return final;
}

sumAll([1, 4]);