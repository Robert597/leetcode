var longestPalindrome = function(s) {
    let longest = "";

    function isPal(s, left, right){
        while(left >= 0 && right < s.length && s[left] == s[right]){
            left--;
            right++;
        }
        return s.slice(left+1, right);
    }

    for(let i = 0; i < s.length; i++){
        let oddpal = isPal(s, i, i);
        let evenPal = isPal(s, i, i+1);

        console.log(oddpal, evenPal);

        let longestPal = oddpal.length > evenPal.length ? oddpal : evenPal;

        if(longestPal.length > longest.length){
            longest = longestPal;
        }
    }
    return longest;
}

console.log(longestPalindrome("babad"));