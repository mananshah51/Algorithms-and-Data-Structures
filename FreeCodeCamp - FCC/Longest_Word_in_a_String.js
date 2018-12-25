// FreeCodeCamp = Find the Longest Word in a String 

function findLongestWordLength(str) {
    var temp = str.split(" ");
    console.log(temp);

    var arr2 = [];

    for(var i = 0; i < temp.length; i++){
      var arr = temp[i].length; 
      arr2.push(arr);   
    }
      console.log(arr2);

      console.log(Math.max(...arr2));
      return Math.max(...arr2);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");