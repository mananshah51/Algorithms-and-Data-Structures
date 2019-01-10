function myReplace(str, before, after) {
  var regex = /^[A-Z]/;
  if(regex.test(before)){
    var after_up = after.charAt(0).toUpperCase() + after.slice(1);
    console.log(after_up);

    var res = str.replace(before, after_up);
  }
  else{
    var res = str.replace(before, after);
    console.log(res);
  }
  return res;
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");