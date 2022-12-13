function isPalindrome(word) {
  // Write your algorithm here
  word.toLowerCase();
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - (i+1)])
      return false;
  }
  return true;
}

/* 
  receive an input word to test for a palindrome
    iterate over half of the word (half - 1 if odd amount of letters)
      test if the letter at each index of the first half is equal to the letter on the opposite half
        if the letters are not equal, end the function and return false
    if the loop ends without returning false, return true
*/

/*
  Problem: Make a function to identify whether or not a word is a palindrome
  regardless of word length or case

  What makes a word a palindrome?
    The word reads the same forward and backward
  
  Therefore the first letter will be equal to the last,
  the second equal to the second to last,
  so on and so forth

  Solution: Iterate over half of the word 
    (any more than half would be redundant) ignoring the number of letters
    (if the number has an odd amount of letters the middle number can be anything)
    and test if the letter being tested is the same as the corresponding letter
    on the opposite side of the word.
    Return true if the word is a palindrome, false if not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abcdefgfedcba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("oooooboooo"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
