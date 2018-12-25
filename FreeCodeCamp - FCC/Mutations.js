//16. Mutations - Basic Algorithm Scripting. 

function mutation(arr) {
  var str = arr.toString();
  console.log(str);

  var res = str.toLowerCase();
  console.log(res);

  var spil = res.split(",");
  console.log(spil);

  for(let i = 0; i < spil[1].length; i++){
      var n = spil[0].indexOf(spil[1][i]);
      console.log(n);
      if(n == -1){
        return false;
      }
  }
  return true;
}

mutation(["hello", "hey"]);

//Let me try another Code - This is another Code. 

function mutation(arr) {
  var test = arr[1].toLowerCase();
  console.log(test);

  var target = arr[0].toLowerCase();
  console.log(target);

  for(let i = 0; i < test.length; i++){
    if(target.indexOf(test[i]) < 0){
        return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);