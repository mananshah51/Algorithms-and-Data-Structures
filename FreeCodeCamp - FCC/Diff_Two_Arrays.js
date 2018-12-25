function diffArray(arr1, arr2) {
  var temp = [];
 if (arr1.length < 1 && arr2.length > 1){
   return arr2;
 }


 for(let i = 0; i < arr1.length; i++){
   var n = arr2.includes(arr1[i]);

   if(n == false && arr1[i] != undefined){
     temp.push(arr1[i]);
   }
 }
  
for(let i = 0; i < arr2.length; i++){
   var n = arr1.includes(arr2[i]);

    if(n == false && arr2[i] != undefined){
     temp.push(arr2[i]);
    }
  }
  return temp;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);