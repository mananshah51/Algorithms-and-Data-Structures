//Chunky Monkey - Basic Algo Scripting. 

function chunkArrayInGroups(arr, size) {
    var arr_len = arr.length;
    console.log(arr_len);

    var num_arr = arr_len / size;
    console.log(num_arr);

    var result = [];

    for(let i = 0; i < num_arr; i++){
      result[i] = arr.splice(0, size);
      console.log(result);
      }

      return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);