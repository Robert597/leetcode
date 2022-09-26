var twoSum = function(nums, target) {
    let result = [];
for(let i = 0; i < nums.length; i++){
        let neededValue = target - nums[i];
        if(nums.includes(neededValue) && i !== nums.indexOf(neededValue)){
            result.push(i, nums.indexOf(neededValue));
            break;
        }
    }

    return result;
};


twoSum([4,6,4,5], 10);
twoSum([2,3,4,6], 10);
twoSum([2,3,4,6,5,7,8,9,3,4,5,7,8,0], 10);