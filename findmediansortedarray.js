var findMedianSortedArrays = function(nums1, nums2) {
    let result;
    var sortingArray = nums1.concat(nums2).sort((a, b) => a - b);
    if(sortingArray.length % 2){
        result = sortingArray[Math.round(sortingArray.length/2) - 1];
    }else{
        let index = sortingArray.length/2 - 1;
        result = (sortingArray[index] + sortingArray[index + 1]) / 2;
    }
    console.log(sortingArray);
    console.log(result);
return result;
};

findMedianSortedArrays([3] , [-2,-1] )