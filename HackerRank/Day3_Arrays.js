//Day 3 - Arrays 

function getSecondLargest(nums) {
    // Complete the function

    var max = Math.max(...nums);
    

    nums.sort(function (a, b) { return b - a });
    

    for (let i = 0; i < nums.length; i++) { 
        if (nums[i] < max) {
            return nums[i];
        }
    }
}