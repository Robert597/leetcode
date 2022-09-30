var isPalindrome = function(x) {
    let output;
    let pal = x.toString();
    let reverse = pal.split("").reverse().join("");
    
    pal === reverse ? output = true : output = false;
    return output;
};