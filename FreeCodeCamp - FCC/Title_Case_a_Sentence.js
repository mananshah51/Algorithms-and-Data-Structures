//Basic Algorithm Scripting: Title Case a Sentence

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  for(var i = 0; i < str.length; i++){
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     console.log(str);
  } 
  return str = str.join(" ");
 
}
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");