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

    // Square(n) Sum
    /*  Complete the square sum function so that it squares each number passed into it and then sums the results together.

      For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

      function squareSum(numbers){
        const square = numbers.map( n => n*n);
        const sum = square.reduce ( (acc, c) => acc + c, 0 );
        return sum;
      }

      //  Alternative
      //   function squareSum(numbers){
      //   return numbers.reduce(function(sum, n){
      //     return (n*n) + sum;
      //   }, 0)
      // }


      //Summation
      //Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
      var summation = function (num) {
        // Code here
        
        let sum = 0
        
        for (let i = 0; i <= num; i++){
           sum += i;
        }
        return sum
      }



      //Counting sheep...
      //Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
      function countSheeps(arrayOfSheep) {
        // TODO May the force be with you
        
        const count = arrayOfSheep.filter( element => element === true); //filter method tests each element and generates a new array with the elements that passed
        
        return count.length;
      }


      //Function 1 - hello world
      //Make a simple function called greet that returns the most-famous "hello world!".

      const greet = () => {
        return "hello world!";
      }


      //Convert a String to a Number!
      // We need a function that can transform a string into a number. What ways of achieving this do you know?
      const stringToNumber = function(str){
        // put your code here
        return parseInt(str); //parseInt() method parses a string argument and returns an integer of the specified radix or base.
      }


      //Keep Hydrated!
      /* Nathan loves cycling.
      Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
      You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
       */
      function litres(time) {
  
        let hoursToLitresConversion = Math.floor (time * 0.5); //Math.floor() function always rounds down and returns the largest integer less than or equal to a given number.
        
        return hoursToLitresConversion;
      }


      // Century From Year
      /*The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
        Given a year, return the century it is in. Examples Year 2000 = 20 century, Year 1705 = 18th century, Year 1601 = 17th century*/

      function century(year) {
        // Finish this :)
        
       let centuryOfYear = Math.ceil(year/100);
        
        return centuryOfYear;
      }

      // Returning Strings
      // Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

      function greet(name){
        //your code here
        
        return `Hello, ${name} how are you doing today?`
      }


      // Basic Mathematical Operations
      /* Your task is to create a function that does four basic mathematical operations. 
      The function should take three arguments - operation(string/char), value1(number), value2(number).
      The function should return result of numbers after applying the chosen operation.*/

      function basicOp(operation, value1, value2)
      {
        // Code
        if (operation == "+") {
          
          return value1 + value2
          
        } else if (operation == "-") {
          
          return value1 - value2
        
        } else if ( operation == "*") { 
          
          return value1 * value2
        
        } else if( operation == "/")  {
           
           return value1 / value2
        
        } else { 
        
        return 'not possible'
        
        }
      }


      // Convert a Boolean to a String
      // Implement a function which convert the given boolean value into its string representation.

      function booleanToString(b){
        //your code here
        
        switch (b){
            case true :
            return "true";
            
            case false:
            return "false";
            
            default:
            return "Not a boolean"
        }
      }


      // Convert number to reversed array of digits
      // Given a random non-negative number, you have to return the digits of this number within an array in reverse order. Example (Input => Output): 35231 => [1,3,2,5,3]

      function digitize(n) {
        //code here
        
        let nArr = Array.from(String (n)) //the arguments passed in n need to convereted to a string for Array.from to work
        
        const arrOfNum = nArr.map(str => Number(str)); // for the array of number output required map is used to get the new array of numbers
        
        return arrOfNum.reverse()
        
      }

