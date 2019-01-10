function translatePigLatin(str) {
  var regex = /[aeiou]/;
  var tast = str.match(regex);
  
  var index = str.indexOf(tast);
  console.log(index);
  
  if(index > 0){
    var final = str.slice(index) + str.slice(0 , index) + "ay";
    return final;
  }
  else if(index == -1){
    var test = str + "ay";
    console.log(test);
    return test;
    }
  return str + "way";
}

translatePigLatin("pry");