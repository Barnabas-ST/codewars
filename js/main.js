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


    // Fake Binary
    // Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

    function fakeBin(x){
  
      let numArray = x.split('')
      
      return numArray.map(element => {
        if (element <5){
          
          return element = 0;
          
        } else if (element >=5){
          return element = 1;
        }
      }).join("")
      
    }

    /*function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
  }*/


  //You only need one - Beginner
  /*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
    Array can contain numbers or strings. X can be either.
    Return true if the array contains the value, false if not.*/

  function check(a, x) {
    // your code here
    
    const findVal = a.find(element => element === x)
    
    return findVal === x ? true : false
  
  }

  //  Simple multiplication
  //  This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

  function simpleMultiplication(number) {
    // your code........
  
  return number % 2 === 0 ? number*8 : number*9
}


// Is he gonna survive?
/*A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return True if yes, False otherwise :)*/  

function hero(bullets, dragons){
  //Get Coding!
    
    return bullets >= dragons*2 ? true : false
    
  }


  // Calculate BMI
  /* Write function bmi that calculates body mass index (bmi = weight / height2). if bmi <= 18.5 return "Underweight"
    if bmi <= 25.0 return "Normal"; if bmi <= 30.0 return "Overweight"; if bmi > 30 return "Obese" */

  function bmi(weight, height) {
  
    const bmiVal = weight / Math.pow(height,2)
    
    if (bmiVal <= 18.5) {
      
      return "Underweight"
      
    } else if (bmiVal <= 25) {
      
     return "Normal"
      
    } else if (bmiVal <= 30){
      
      return "Overweight"
      
    } else if (bmiVal > 30){
      
      return "Obese"
      
    }
  }


  //  DNA to RNA Conversion
  /*Create a function which translates a given DNA string into RNA. For example: "GCAT"  =>  "GCAU"*/

  function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    
    const dnaArr = dna.split('')
    
    const rnaArr = dnaArr.map(element => element ==="T" ? "U" : element)
    
    return rnaArr.join('')
    
  }


  //  Reversed sequence
  //  Build a function that returns an array of integers from n to 1 where n>0. Example : n=5 --> [5,4,3,2,1]

  const reverseSeq = n => {
  
    let arr = []
    
    for (let i = 1; i <= n; i++){
       arr.push(i)
    }
  
      return arr.reverse()
  };


  //  Find Maximum and Minimum Values of a List
  //  Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
  //  Examples (Input -> Output) * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134


  var min = function(list){
    
    return Math.min(...list);

}

var max = function(list){
    
    return Math.max(...list);
}


//  How good are you really?
/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False! Note: Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  
  let realclassPoints = classPoints.push(yourPoints)
  
  const classAvg = (classPoints.reduce((a,c)=> a+c,0))/classPoints.length
  
  return (yourPoints > classAvg) ? true : false
}


//  Will you make it?
/*  You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not.*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
  let gallonsNeeded  = distanceToPump/mpg
  
  return fuelLeft >= gallonsNeeded ? true : false
};


//  Beginner - Reduce but Grow
//  Given a non-empty array of integers, return the result of multiplying the values together in order. Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
  return x.reduce((a,c) => a * c, 1) 
}


//  Sentence Smash
//  Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//  ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
  return words.join(' ')
};


//  Convert a string to an array
//  Write a function to split a string and convert it into an array of words.
//  Examples (Input ==> Output): "Robin Singh" ==> ["Robin", "Singh"] / "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
  return string.split(' ' );
    // code code code
  
  }


//  Count by X
/*  Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).*/

// Example countBy(1,10) === [1,2,3,4,5,6,7,8,9,10] & countBy(2,5) === [2,4,6,8,10]


function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(i*x)
  }
  
  return z;
}


//  Transportation on vacation
/*  After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).*/  

function rentalCarCost(d) {
  // Your solution here
  
const dailyCost = d*40;

if (d<3) {
  
  return dailyCost
  
} else if (d>=3 && d<7){
  
  return dailyCost - 20 
  
} else if (d>=7){
  
  return dailyCost - 50 

}
  
}


//  If you can't sleep, just count sheep!!
//  Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  //your code here
  
  let countOfSheep = ''
  
  for(let i = 1; i<=num; i++){
    countOfSheep += i.toString() + ' sheep...';
  }
  return countOfSheep
}


//  Grasshopper - Personalized Message
/*Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message: 	
case - name equals owner | return: 'Hello boss'
case - otherwise | return:	'Hello guest'
*/ 

function greet (name, owner) {
  // Add code here
  
  return name === owner ? 'Hello boss' : 'Hello guest'
  
}


//  Rock Paper Scissors!
//  Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
  
  if (p1 === "scissors" && p2 === "paper" || p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "rock") {
      
    return "Player 1 won!"
    
  } else if (p2 === "scissors" && p1 === "paper" || p2 === "rock" && p1 === "scissors" || p2 === "paper" && p1 === "rock") {
    
    return "Player 2 won!"
    
  } else {
    
    return "Draw!"
    
  }

}


//  Volume of a Cuboid
//  Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    
    return length*width*height
  }
}


//  Total amount of points
/* Our football team has finished the championship. Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
For example: ["3:1", "2:2", "0:1", ...]. Points are awarded for each match as follows:
if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
Notes: our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
  
  let points = 0;
  
games.forEach(game => {
    const results = game.split(":") 
    const x = Number(results[0])
    const y = Number(results[1])
    
    if (x>y){
      points += 3;
    } else if (x==y){
      points += 1;
    }
  })

  return points
}

//OR------

function points(games) {
  
  return games.reduce ((w,[x,_,y]) => w + (x>y ? 3 : x==y), 0)
}


//  Area or Perimeter
/*  You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9*/

const areaOrPerimeter = function(l , w) {
  // Return your answer
  
  if (l>w || l<w){
    return l+l+w+w
    
  } else if (l===w){
    return l*l
    
  } else {
    return "not a shape" 
  }
};