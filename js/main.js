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
        
        let nArr = Array.from(String (n)) //the arguments passed in n need to be convereted to a string for Array.from to work
        
        const arrOfNum = nArr.map(str => Number(str)); // for the array of number output required map is used to get the new array of numbers
        
        return arrOfNum.reverse()
        
      }


      //You Can't Code Under Pressure #1
      // Code as fast as you can! You need to double the integer and return it.

      function doubleInteger(i) {
        // i will be an integer. Double it and return it.
        
        return i*2;
      }


      //Beginner - Lost Without a Map
      //Given an array of integers, return a new array with each value doubled.

      function maps(x){
  
        const newArray = x.map(element => element*2);
        
        return newArray;
      
      }

      //Abbreviate a Two Word Name
      // Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.
      // It should look like this: Sam Harris => S.H or patrick feeney => P.F

      function abbrevName(name){

      // code away
      
      const nameArr = name.split(' ')   // split the words into two strings in an array 
      const firstChar = nameArr[0].charAt(0)  // take the first character of each string
      const secChar = nameArr[1].charAt(0)
    
      return `${firstChar.toUpperCase()}.${secChar.toUpperCase()}`  // concatenate the first characters with a period
      

      }

      //A Needle in the Haystack
      /*
      Can you find the needle in the haystack? Write a function findNeedle() that takes an array full of junk but containing one "needle"
      After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle, so:
      
      Example(Input --> Output)
      ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
      */

      function findNeedle(haystack) {
        // your code here
        
        const foundNeedle = haystack.find((x) => x === "needle")
        
        const position = haystack.findIndex((x) => x === "needle")
        
        return `found the needle at position ${position}`
          
      }


      // Beginner Series #2 Clock
      /* Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.
              Input constraints: 0 <= h <= 23; 0 <= m <= 59; 0 <= s <= 59

      Example: h = 0; m = 1; s = 1 ----- result = 61000

      **Clever solution**

      function past(h, m, s){

        const setTime = new Date().setHours(h, m, s);
        const midnight = new Date().setHours(0, 0, 0);
  
        return Math.round(setTime - midnight);
      }

      */

      function past(h, m, s){
        //#Happy Coding! ^_^
        
        if (h<=23 && h>=0 && m<=59 && m>=0 && s<=59 && s>=0){
          
          let hToMilliSec = h * 3600000; //convert inputs to millisecond
          let mToMilliSec = m * 60000;
          let sToMilliSec = s * 1000;
          
          return hToMilliSec + mToMilliSec + sToMilliSec //add times for total
            
        } else {
          return 'One of your inputted times is incorrect'
        }
        
      }

      // Count of positives / sum of negatives
      /* 
      Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
      If the input is an empty array or is null, return an empty array.

      Example - For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
      */

      function countPositivesSumNegatives(input) {
        // your code here
          
        if(input == null || input.length < 1){
          
          return []
        }
            
        const positiveArr = input.filter(p => p > 0)
        
        const negativeArr = input.filter(n => n < 0)
        
        const sumNegativeArr = negativeArr.reduce((a,c) => a+c,0)
        
        const finalArr = [positiveArr.length, sumNegativeArr]
          
        return finalArr
          
      }


      // MakeUpperCase
      // Write a function which converts the input string to uppercase.

      function makeUpperCase(str) {
        // Code here
        
        return str.toUpperCase()
      }

      // Beginner Series #1 School Paperwork
      /* Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.  
      Example 
      n= 5, m=5: 
      25 n=-5, m=5:  0
      */ 

      function paperwork (n, m) {
  
        return n < 0 || m < 0 ? 0 : m * n
        
      }

      // Opposites Attract
      // Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


      function lovefunc(flower1, flower2){
        // moment of truth
        
      return flower1 % 2 !== flower2 % 2 ? true : false
        
      }

      // Sum Arrays
      // Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

      function sum (numbers) {
        "use strict";
        
      return numbers.reduce((a,c) => a+c,0) 
        
    };

    //  Invert values
    //  Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
    //  EXAMPLE: invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]  OR invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5] OR invert([]) == []

    function invert(array) {
  
      if(array == null || array.length < 1){
              
          return []
        }
      
      const invertedArray = array.map(element => element * -1)
      
      return invertedArray
    }

    // Are You Playing Banjo?
    /* Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!
        The function takes a name as its only argument, and returns one of the following strings: 
        name + " plays banjo"  and name + " does not play banjo"*/

    function areYouPlayingBanjo(name) {
      // Implement me
      
      return name.startsWith('R') || name.startsWith("r") ? name + " plays banjo" : name + " does not play banjo"
    
    }

    // Calculate average
    
    //  Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.

    function findAverage(array) {
      // your code here
      
      if (array == null || array.length < 1){
        
          return 0
        
          } else {
            
          let sum = array.reduce((a,c)=> a+c,0)
      
          return sum/array.length ;
            
          }
      
    }
      

      



