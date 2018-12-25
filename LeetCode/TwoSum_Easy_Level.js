//LeetCode: Algorithms - Two Sum - Easy - 1st 

var twoSum = function(nums, target) {
    
    var output = [];
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            var temp = nums[i] + nums[j];
            if(temp == target){
                output.push(i);
                output.push(j);
                return output;
            }
        }
    }
    
};
