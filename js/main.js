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


//  Grasshopper - Grade book
//  Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
/*
Numerical Score	      Letter Grade
90 <= score <= 100	      'A'
80 <= score < 90	        'B'
70 <= score < 80	        'C'
60 <= score < 70	        'D'
0 <= score < 60	          'F'
*/


function getGrade (s1, s2, s3) {
  // Code here
  
  const avg = (s1+s2+s3)/3
  
   if(avg >= 90 && avg <= 100){
     return 'A'
     
   }else if(avg >= 80 && avg < 90){
     return 'B'
     
   }else if(avg >= 70 && avg < 80){
     return 'C'
     
   }else if(avg >= 60 && avg < 70){
     return 'D'
     
   }else if(avg >= 0 && avg <= 60 ){
     return 'F'
     
   }
}


//  Quarter of the year
/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/  

const quarterOf = (month) => {
  // Your code here
  if (month >=1 && month <= 3){
    return 1
  }else if(month >=4 && month <= 6){
    return 2
  }else if(month >=7 && month <= 9){
    return 3
  }else if (month >=10 && month <= 12){
    return 4
  }else {
    return "Not in the calendar"
  }
}


//  Sum Mixed Array
//  Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//  Return your answer as a number.

function sumMix(x){

  const xNum = x.map(e => parseInt(e))
  
  return xNum.reduce((a,c) => a+c,0)
}


//  Remove exclamation marks
//  Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {

  const sArray = s.split('!');
  
  const sNewStr = sArray.join('')
  
  return sNewStr
  
}


//  Third Angle of a Triangle
//  You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd. Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - (a+b);
}


//  Thinkful - Logic Drills: Traffic light
/*  You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
    Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
    For example, when the input is green, output should be yellow.*/

function updateLight(current) {
  
  //your code here! solution could be much better
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

  //OR

  if (current === "green"){
    
    return 'yellow'
    
  }else if (current === "yellow"){
    
    return 'red'
    
  }else if (current === "red"){
    
    return 'green'
    
  }

}


//  Array plus array
/*I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.*/  

function arrayPlusArray(arr1, arr2) {
  
  return arr1.reduce((a,c)=> a+c,0) + arr2.reduce((a,c)=> a+c,0); 
  
}


//  Sum without highest and lowest number
/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6*/  

function sumArray(array) {

  if (array === null || array === undefined || array.length < 2){ //(!array || array.length < 2) better option
    
    return 0
  
  } else {
    const orderArray = array.sort((a, b) => a-b)
  
    const removeMinNum = array.shift()
    
    const removeMaxNum = array.pop()
  
    return array.reduce((a,c)=> a+c,0)
  }
  
  }


  //  L1: Set Alarm
  /*Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
  The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
  setAlarm(true, true) -> false
  setAlarm(false, true) -> false
  setAlarm(false, false) -> false
  setAlarm(true, false) -> true*/  

  function setAlarm(employed, vacation){

    if (employed === vacation) {
      return false
      } else if (employed == true && vacation == false){
        return true
      } else {
        return false
      }
      
    }


    //  Count the Monkeys!
    /*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
      As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
      For example(Input --> Output):
      10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      1 --> [1]
      */

    function monkeyCount(n) {
      // your code here
        let number = [ ]
        
        for(let i = 1; i <=n; i++){
          number.push(i)
        }
        
        return number
      }


      //  Messi goals function
      /* Messi is a soccer player with goals in three leagues:
        LaLiga
        Copa del Rey
        Champions
        Complete the function to return his total number of goals in all three leagues.
        Note: the input will always be valid.
        For example: 5, 10, 2  -->  17*/

      function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
        // code goes here
        
        return laLigaGoals + copaDelReyGoals + championsLeagueGoals
      }


      //  Double Char
      /*  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
      Examples (Input -> Output):
      * "String"      -> "SSttrriinngg"
      * "Hello World" -> "HHeelllloo  WWoorrlldd"
      * "1234!_ "     -> "11223344!!__  "*/

      function doubleChar(str) {
        // could have used split, map & join;
        
      let charDoubled = ""
        for (let i = 0; i < str.length; i++){
          charDoubled += str[i].repeat(2)
        }
        
        return charDoubled
      }


      //  Beginner Series #4 Cockroach
      /*  The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

      For example: 1.08 --> 30*/

      function cockroachSpeed(s) {
        //Good Luck!
        
        return Math.floor((s*30)/1.08)
        
      }


      //  The Feast of Many Beasts
      /*All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
        Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
        Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.*/

      function feast(beast, dish) {
        //your function here
          
          return beast[0] === dish[0] && beast[(beast.length - 1)] === dish[(dish.length - 1)] ? true : false
        }


        //  Parse nice int from char problem
        /*You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
        Write a program that returns the girl's age (0-9) as an integer. Assume the test input string is always a valid string. 
        For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.*/

        function getAge(inputString){
          // return the girl's correct age as an integer. Happy coding :) 
            
            return parseInt(inputString[0])
          }


        //  Find the first non-consecutive number
        /*Your task is to find the first element of an array that is not consecutive. By not consecutive we mean not exactly 1 larger than the previous element of the array.
          E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number. If the whole array is consecutive then return null2.
          The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
          If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
          1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )*/  
          
          function firstNonConsecutive (arr) {
  
            let nonConsec = arr.find((x,y) => x !== y + arr[0]) // searching for a consecutive pattern
            
            return Number.isInteger (nonConsec) ? nonConsec : null // verifying the output of searching for the pattern
            
          }


        //  Twice as old
        /*Your function takes two arguments:
        current father's age (years)
        current  age of his son (years)
        Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
        */

          function twiceAsOld(dadYearsOld, sonYearsOld) {
            // your code here
            
            return dadYearsOld/sonYearsOld >= 2 ?  dadYearsOld - (sonYearsOld*2) : (sonYearsOld*2) - dadYearsOld
          }


        //  Switch it Up!
        /*When provided with a number between 0-9, return it in words. Input :: 1 - Output :: "One".
        If your language supports it, try using a switch statement.*/

          function switchItUp(number){
            //Write your own Code!
              switch (number) {
                  case 0: 
                  return 'Zero';
                  break;
                  case 1: 
                  return 'One'
                  break;
                  case 2:
                  return 'Two' 
                  break;
                  case 3: 
                  return 'Three' 
                  break;
                  case 4: 
                  return 'Four' 
                  break;
                  case 5: 
                  return 'Five' 
                  break;
                  case 6:
                  return 'Six' 
                  break;
                  case 7:
                  return 'Seven' 
                  break;
                  case 8: 
                  return 'Eight' 
                  break;
                  case 9: 
                  return 'Nine'
                  break

                  default:
                    return 'Unknown number';
            }
             } 


        // Will there be enough space?
        /*The Story: Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
        Task Overview: You have to write a function that accepts three parameters:
        cap is the amount of people the bus can hold excluding the driver.
        on is the number of people on the bus excluding the driver.
        wait is the number of people waiting to get on to the bus excluding the driver.
        If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
        Usage Examples: cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
        cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/

             function enough(cap, on, wait) {
              // your code here
              let totalPassengers = on + wait;
              
              return totalPassengers <= cap ? 0 : -1*(cap - (totalPassengers))
            }


        
        
      //  Grasshopper - Check for factor
      /*This function should test if the factor is a factor of base.
      Return true if it is a factor or false if it is not.

    About factors - Factors are numbers you can multiply together to get another number. 2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.*/

function checkForFactor (base, factor) {
  // code here
  return base%factor ==0 ? true : false;
}


//  Removing Elements
/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!*/

function removeEveryOther(arr){
  //your code here
  
  return arr.filter((_,index) => index % 2 == 0) // we dont need the elements so we use _
}

//  Keep up the hoop
/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/ 

function hoopCount (n) {
  //your code goes here    
 
 return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}


//  Function 2 - squaring an argument
//  Now you have to write a function that takes an argument and returns the square of it.

// Write the "square"-function here
function square(n){
  return Math.pow(n,2)
}


//  Is the string uppercase?
/*Task
Create a method to see whether the string is ALL CAPS.
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

String.prototype.isUpperCase = function Check (str) {
  // your code here
  
  return this == this.toUpperCase()
}


//  Expressions Matter
/*Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.*/  

function expressionMatter(a, b, c) {
  
  let allMultiplication = a * b * c
  let allAdd = a + b + c
  let bracketAddSecondThird = a * (b + c)
  let addFirstSecond = a + b * c
  let addSecondThird = a * b + c
  let bracketAddFirstSecond = (a + b) * c

  
  return Math.max(allAdd, allMultiplication, bracketAddSecondThird, addFirstSecond, addSecondThird, bracketAddFirstSecond)// highest achievable result
}


//  altERnaTIng cAsE <=> ALTerNAtiNG CaSe
/*Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
As usual, your function/method should be pure, i.e. it should not mutate the original string.
For example: "hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"*/

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split('').map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join("")
}


// Grasshopper - Debug sayHello
/*The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
Example output: Hello, Mr. Spock*/  

function sayHello(name) {
  return `Hello, ${name}`
}


//  Grasshopper - Messi Goals
/*Messi's Goal Total - Use variables to find the sum of the goals Messi scored in 3 competitions

Information
Messi goal scoring statistics:

Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
Task
Create these three variables and store the appropriate values using the table above:
laLigaGoals
championsLeagueGoals
copaDelReyGoals
Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.*/

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals


//  Grasshopper - Terminal game move function
/*Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:
move(3, 6) should equal 15*/

function move (position, roll) {
  // return the new position
  
  let diceMove = roll * 2;
  
  return position !== 0 ? diceMove+position : diceMove
}


//  Is it even?
/*In this Kata we are passing a number (n) into a function. Your code will determine if the number passed is even (or not).
The function needs to return either a true or false. Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

function testEven(n) {
  //Your awesome code here!

return n % 2 == 0 ? true : false
}


//  Powers of 2
/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]*/  

function powersOfTwo(n){
  
  let arr = [ ]
  
  for (let i = 0; i <= n; i++){
    arr.push(Math.pow(2,i))
  }
  
  return arr
}


//  What is between?
/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
For example:
a = 1
b = 4
--> [1, 2, 3, 4]*/

function between(a, b) {
  // your code here
  
  let arr = []
  
  for (let i = a; i <= b; i++){
     arr.push(i)
  }
  
  return arr
}


//  Correct the mistakes of the character recognition software
/*Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.*/

function correct(string)
{
	// your code here
  
  let correction = string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I")
  
  return correction
}


//  Student's Final Grade
/*Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*Use Comparison and Logical Operators.

*/

function finalGrade (exam, projects) {
  
  if (exam > 90 || projects > 10){
    
    return 100
    
  }else if (exam > 75 && projects >= 5){
    
    return 90
    
  }else if (exam > 50 && projects >= 2){
    
    return 75
    
  }else {
    
    return 0
    
  }
}


//  I love you, a little , a lot, passionately ... not at all
/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.*/  

function howMuchILoveYou(nbPetals) {
    
  let petalsArr = ["not at all","I love you","a little","a lot","passionately","madly"]
   
  let index = nbPetals % 6
  
  if (index === -1){
    index = petalsArr.length - 1
  }
   
  return petalsArr[index]
 }


 // Cat years, Dog years
 /*I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that*/ 

 var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  
  let catFirstYear = 15;
  let catSecondYear = 9;
  let catYears;
  
  let dogFirstYear = 15;
  let dogSecondYear = 9;
  let dogYears;
  
    if (humanYears > 2){
    catYears = catFirstYear + catSecondYear + (humanYears - 2)*4
  
  } else if (humanYears == 2){
    
    catYears = catFirstYear + catSecondYear 
    
  } else if (humanYears == 1) {
    catYears = catFirstYear
  }
  
  
   if (humanYears > 2){
    dogYears = dogFirstYear + dogSecondYear + (humanYears - 2)*5
  
  } else if (humanYears == 2){
    
    dogYears = dogFirstYear + dogSecondYear
    
  } else if (humanYears == 1) {
    dogYears = dogFirstYear 
  }
  
  
  return [humanYears,catYears,dogYears];
}

//OR

var humanYearsCatYearsDogYears = function(humanYears) {
  var catYears = 0;
  var dogYears = 0;
  
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else if (humanYears > 2) {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
}


//  All Star Code Challenge #18
/*All Star Code Challenge #18
Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1*/

function strCount(str, letter){  
  //code here
  
  const strArr = str.split('');
  
  const filteredStrArr = strArr.filter(e => e === letter)
  
  return filteredStrArr.length
}



//  Difference of Volumes of Cuboids
/*In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones.
If you can, try writing it in one line of code.*/  

function findDifference(a, b) {
  return Math.abs(a.reduce((x,c) => x*c) - b.reduce((x,c) => x*c))

}

//  Sum The Strings
/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
Example: (Input1, Input2 -->Output)
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:
If either input is an empty string, consider it as zero.
Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)*/

function sumStr(a,b) {
  
  return (+a + +b).toString()
  
  }


//  Is it a palindrome?
//  Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // your code here
  
return x.toLowerCase() == x.toLowerCase().split('').reverse().join('') ? true : false

}


//  Welcome!
/*Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
*/

function greet(language) {
	
  var dbLang = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
      };
  
    for (var key in dbLang)
    {
      if (key == language){
        return dbLang[key]
      } 
    }
    return dbLang.english


}


//OR

function greet(language) {
	var GreetingsDB = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }, 
  defaultLanguage = 'english';
  return GreetingsDB[language] || GreetingsDB[defaultLanguage];
}


//  N-th Power
/*This kata is from check py.checkio.org
You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
Let's look at a few examples:
array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.*/

function index(array, n){
  //your code here
  
  let arrIndex = array.findIndex((element, index) => index == n)
  
  return arrIndex > 0 ? Math.pow(array[arrIndex], n) : arrIndex
}


//  Sort and Star
/*You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  let sortedArr = s.sort()[0].split('')
  
  return sortedArr.join('***')
}