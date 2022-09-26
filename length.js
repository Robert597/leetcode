var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let begin = 0;
   let set = new Set();

   for(let end = 0; end < s.length; end++){
      console.log(set);
      while(set.has(s[end])){
         set.delete(s[begin])
         console.log(s[begin]);
         begin = begin + 1;
         console.log(set);
      }

      set.add(s[end]);
      maxLength = Math.max(maxLength, end - begin + 1);
   }
};


lengthOfLongestSubstring("abcdd");
lengthOfLongestSubstring("vbgbevhi");
