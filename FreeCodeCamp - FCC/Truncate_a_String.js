// Truncate a String - FreeCodeCamp 

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var str_len = str.length;
  console.log(str_len);

  var output = "";
  var extension = "...";

  if(str_len <= num){
    return str;
  }
else{
  output = str.substring(0, num) + extension;
  return output;
}
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);