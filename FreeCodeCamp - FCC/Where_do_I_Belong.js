//15. Where do I Belong - This has variety of Solutions - I will try all of them which are basic - This is the First Solution. 

function getIndexToIns(arr, num) {
    arr = arr.sort(function(a,b){
      return a -b;
    });

    //The Array is Sorted in the Ascending Order

    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= num){
          return i;
        }
    }
     return arr.length;
}
getIndexToIns([5, 3, 20, 3], 5)


//This Solution without using the sorting of the array in the ascending order

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var count = 0;

  for(let i = 0; i < arr.length; i++){
    if(num > arr[i]){
      count++;
    }
  }
  return count;
}

getIndexToIns([40, 60], 50);

//This solution is with the while Loop. 

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  arr = arr.sort(function(a,b){
    return a - b;
  })
  console.log(arr);
  
  var i = 0; 
  while(num > arr[i]){
    i++;
  }
return i;
}

getIndexToIns([40, 60], 50);

//This is another Solution that has .push with Sort and with IndexOf 

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  console.log(arr);

  arr = arr.sort(function(a,b){
    return a - b;
  });
  console.log(arr);

  var output = arr.indexOf(num);
  console.log(output);
  return output;
}

getIndexToIns([40, 60], 50);