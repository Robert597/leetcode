var sumEvenAfterQueries = function(nums, queries) {
    let result = [];
    queries.map((i) => {
        let j = 0;
        nums[i[1]] = i[0] + nums[i[1]];
       nums.map((i) => {
        i%2 ? j : j = j + i ;
       })
       result.push(j);
    });
    return result;
};

sumEvenAfterQueries([6, 3, 9], [[3,0], [4,1], [5,2]]);
