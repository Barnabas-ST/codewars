// String repeat JavaScript:
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


function repeatStr (n, s) {
  
    return (n > 0 ? s.repeat(n) : 'not valid')
  
  }

  // Remove First and Last Character
  // Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

  function removeChar(str){
    //You got this!
     return str.slice(1, str.length-1)
   };

  // Multiply
  // This code does not execute properly. Try to figure out why.

    const multiply = (a, b) => a * b;

    // Find the smallest integer in the array
    // Given an array of integers your solution should find the smallest integer. 

    class SmallestIntegerFinder {
  
      findSmallestInt = args => {
        return Math.min(...args)
      }
    }


    // Remove String Spaces
    // Simple, remove the spaces from the string, then return the resultant string.


    function noSpace (x){
      return x.split(' ').join('');
    }