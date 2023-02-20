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


//  Reverse List Order
/*In this kata you will create a function that takes in a list and returns a list with the reverse order.
Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]*/

function reverseList(list) {
  return list.reverse()
}


//  Filter out the geese
/*Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:
 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:
  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.*/

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
  return birds.filter(element => !geese.includes(element))
  // return an array containing all of the strings in the input array except those that match strings in geese
};


//  Regular Ball Super Ball
/*Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
ball1 = new Ball();
ball2 = new Ball("super");
ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"*/

var Ball = function(ballType) {
  // your code goes here
  
  this.ballType = ballType || "regular"
};

//OR 

class Ball {
  constructor(ballType){
    this.ballType = ballType || "regular"
  }
}


//  How many lightsabers do you own?
/*Inspired by the development team at Vooza, write the function that
accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
Note: your function should have a default parameter.
For example(Input --> Output):
"anyone else" --> 0
"Zach" --> 18*/

function howManyLightsabersDoYouOwn(name) {
  
  let anyoneElse = 0;
  
  return name != "Zach" ? anyoneElse : 18
}


//  Filling an array (part 1)
/*We want an array, but not just any old array, an array with contents!
Write a function that produces an array with the numbers 0 to N-1 in it.
For example, the following code will result in an array containing the numbers 0 to 4:
arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.*/

const arr = N => {
  let nArr = [];
  
  for(let i = 0; i < N; i++){
    nArr.push(i)
  }
  
  return nArr
}


//  What's the real floor?
/*Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
Write a function that given a floor in the american system returns the floor in the european system.
With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level.
More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3*/

function getRealFloor(n) {
  
  if (n < 0){
    return n
    
  } else if (n == 0 || n == 1){
    
    return 0
    
  } else if (n < 13){
    
    return n - 1
    
  } else if (n >= 14){
    
    return n - 2
  }
  
}


//  Well of Ideas - Easy Version
/*For every good kata idea there seem to be quite a few bad ones!
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.*/

function well(x){
  let goodIdeas = x.filter(element => element == 'good')
  
  if (goodIdeas.length == 0){
    return 'Fail!'
  } else if(goodIdeas.length <=2){
    return 'Publish!'
    
  } else if (goodIdeas.length >2){
    return 'I smell a series!'
  } else{
    return 'Error'
  }
}


//  Drink about
/*Kids drink toddy; Teens drink coke; Young adults drink beer; Adults drink whisky;
Make a function that receive age, and return what they drink.

Rules:
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

Examples: (Input --> Output)
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"*/

function peopleWithAgeDrink(old) {
  
  if (old < 14){
    return "drink toddy"
  } else if(old < 18){
    return "drink coke"
  } else if(old < 21){
    return "drink beer"
  } else {
    return "drink whisky"
  } 
};

// OR

const peopleWithAgeDrink = (age) => {
  switch (true) {
    case (age >= 21): return 'drink whisky'
    case (age >= 18): return 'drink beer'
    case (age >= 14): return 'drink coke'
    default: return 'drink toddy'
  }
};


//  Training JS #1: create your first JS function and print "Hello World!"
/*In JavaScript, your code is running in a function, let us step by step complete your first JS function.
Look at this example:
      --------keyword "function"
      |       ----your function name  
      |       |    ---if needed, some arguments will appear in parentheses
      |       |    |
    function myfunc(){  ---------your function code will starting with "{"
      //you should type your code here
    }----------------------------ending with "}"
If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

function printWordToScreen(){
  var somewords="This is an example."
  console.log(somewords)
}
If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method. You will use it a lot!

Task
Please refer to two example above and write your first JS function.
mission 1:
use keyword function to define your function, function name should be helloWorld(don't forget the () and {})
mission 2:
use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).
mission 3:
type the console.log() in the next line (don't forget to put the str in the parentheses).
When you have finished the work, click "Run Tests" to see if your code is working properly.
In the end, click "Submit" to submit your code pass this kata.*/

function helloWorld() {
  let str = 'Hello World!'
  console.log(str)
}


//  Find Multiples of a Number
/*In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.*/

function findMultiples(integer, limit) {
  //your code here
  
  let arr = []
  
  for (let i = 1; i <= limit; i++){
    arr.push(i)
  }
  
  return arr.filter(e => e % integer == 0) 
}


//  Multiplication table for number
/*Your goal is to return multiplication table for number that is always an integer from 1 to 10.
For example, a multiplication table (string) for number == 5 looks like below:
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.
Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.*/

function multiTable(number) {
  // good luck
  
  let result = ''
  for (let i = 1; i<=10; i++){
     let answer = i * number
     result += `${i} * ${number} = ${answer}\n`
  }
  return result.trimEnd("\n")
}


//  Plural
/*We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
All values will be positive integers or floats, or zero.
*/

function plural(n) {
  // ...
  
  return n > 1 || n < 1 ? true : false
}


//  Name Shuffler
/*Write a function that returns a string in which firstname is swapped with last name.
Example(Input --> Output)
"john McClane" --> "McClane john"*/

function nameShuffler(str){
  //Shuffle It
  
  return str.split(' ').reverse().join(' ')
}


//  Grasshopper - Basic Function Fixer
/*Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
Can you help me fix the function?*/

function addFive(num) {
  var total = num + 5;
  return total;
}


//  A wolf in sheep's clothing
/*Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
Note: there will always be exactly one wolf in the array.
Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"*/

function warnTheSheep(queue) {
  
  let spotWolf = queue.findIndex((element) => element == "wolf")
  
  return spotWolf == (queue.length - 1) ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${Math.abs((spotWolf + 1) - queue.length)}! You are about to be eaten by a wolf!`
}


//  Vowel remover
/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata*/

function shortcut (string) {
  
  return string.replace(/[aeiou]/g,'');
}


//  Exclusive "or" (xor) Logical Operator
/*Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:
false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.*/

function xor(a, b) {
  // TODO: Program Me
  
  if (a === true && b === true){
    return false
  } else if (a === false && b === false){
    return false
  } else if (a === true || b === true){
    return true
  } else if (a === false || b === false){
    return true
  }
}


//  Training JS #7: if..else and ternary operator
/*Task:
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.*/

function saleHotdogs(n){
  
  return n < 5 ? 100 * n
      : n >= 5 && n < 10 ? 95 * n
      : n >= 10 ? 90 * n
      :'no price';

}


//  get character from ASCII Value
/*Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
Example:
get_char(65)
should return:

'A'*/

function getChar(c){
  
  return String.fromCharCode(c)
}


//  Convert to Binary
/* Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
to_binary(1)  should return 1 
to_binary(5)  should return 101 
to_binary(11) should return 1011 

Example:
toBinary(1)   should return 1 
toBinary(5)   should return 101 
toBinary(11)  should return 1011 */

function toBinary(n){
  
  return Number(n.toString(2));
}


// The Wide-Mouthed frog!
/*The wide-mouth frog is particularly interested in the eating habits of other creatures.
He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
When he meets the alligator, it then makes a tiny mouth.
Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.*/

function mouthSize(animal) {
  // code here
  
  return animal.toLowerCase() === "alligator" ? "small" : "wide"
}


//  Merge two sorted arrays into one
/*You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!*/

function mergeArrays(arr1, arr2) {
  
  let mergedArr = arr1.concat(arr2);
 
 return Array.from(new Set(mergedArr.sort((x,y) => x - y)))

}


//  Hello, Name or World!
/*Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:
* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"*/

function hello(name) {
  
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
  
}


// Lario and Muigi Pipe Problem
/*Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8*/

function pipeFix(numbers){

return Array.from({length: numbers.slice(-1) - numbers[0] + 1}, (_,index) => index + numbers[0])  // length sets the arry length
}

//OR 

function pipeFix(numbers){
  var first = numbers[0];
  var last = numbers[numbers.length-1];
  
  var arr = [];
  for(var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}


//  Holiday VIII - Duty Free
/*The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
All inputs will be integers. Please return an integer. Round down.
*/

function dutyFree(normPrice, discount, hol){

  let discPrice = normPrice * discount/100;
  
  return Math.floor(hol/discPrice)
}


//  5 without numbers !!
/*Write a function that always returns 5
Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
Good luck :)*/

function unusualFive(char) {
  let arr = ['hi','hi', 'hi', 'hi','hi']
  return arr.length;
}


//  Remove duplicates from list
/*Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.*/

function distinct(a) {
  
  return Array.from(new Set(a));
}


//  Hex to Decimal
/*Complete the function which converts hex number (given as a string) to a decimal number.*/

function hexToDec(hexString){
  //your code here
  return parseInt(hexString,16);
}


//  The 'if' function
/*Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
When bool is truthy, func1 should be called, otherwise call the func2.
Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/

function _if(bool, func1, func2) {
  // ...
  
  if (bool == true){
     func1()
    
  } else {
     func2()
  }
}


//  Enumerable Magic #25 - Take the First N Elements
/*Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
If you need help, here's a reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice*/

function take(arr, n) {
  // Your code here
  
  return arr.slice(0,n);
}


//  Bin to Decimal
/*Complete the function which converts a binary number (given as a string) to a decimal number.*/

function binToDec(bin){
  // ...
  
  return parseInt(bin, 2);
}


//  Super Duper Easy
/*Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".*/

function problem(x){
  //your code here
  
  return typeof x !== "string" ? x*50 + 6 : 'Error';
}


//  Grasshopper - Function syntax debugging
/*A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.*/

function main (verb, noun){

  return `${verb}${noun}`
}


//  Find the Remainder
/*Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)*/

function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
   return n > m ? n % m : m % n
}


//    Exclamation marks series #1: Remove an exclamation mark from the end of string
/*Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"*/

function remove (string) {
  //coding and coding....
  
   return string.endsWith('!') ? string.slice(0,string.length-1): string ;
}


//  Alan Partridge II - Apple Turnover
/*Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
Note: Input will either be a positive integer (or a string for untyped languages).*/

function apple(x){

  return Math.pow(x,2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}


//  101 Dalmatians - squash the bugs, not the dogs!
/*Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
The number of dogs will always be a number and there will always be at least 1 dog.
Good luck!*/

function howManyDalmatians(number){
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  return number <= 10 ? dogs[0] 
        :number <= 50 ? dogs[1] 
        :number == 101 ? dogs[3] 
        :dogs[2];
  
}


//  Grasshopper - Terminal game combat function
/*Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. 
Health can't be less than 0.*/

function combat(health, damage) {
  // Write your code here
  
  
  return health > damage ? health - damage : 0
}

//  Training JS #2: Basic data types--Number
/*In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..
Numbers can use operators such as + - * / %

Task
I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
When you have finished the work, click "Run Tests" to see if your code is working properly.
In the end, click "Submit" to submit your code pass this kata.
*/
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v3, //set number value to a
      b = v1; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b = v5; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}


//  Surface Area and Volume of a Box
/*Write a function that returns the total surface area and volume of a box as an array: [area, volume]*/

const getSize = (width, height, depth) => {
  return [2*(height*width + width*depth + height*depth), width*height*depth]
  
}


//  Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
/*Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
  //coding and coding....
  
  return s.replace(/[aeiouAEIOU]/g,'!');
}


//  No zeros for heros
/*Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway*/

function noBoringZeros(n) {
  // your code
  
  return +`${n}`.replace(/0+$/,'') 

  /* '+' at the beginning is to turn the result to a number, 
    '+' next to the 0 is a Quantifier (check mdn) to find multiple matches. For example, /a+/ matches the "a" in "candy" and all the "a"'s in "caaaaaaandy*/ 
  //$ is an Assertion(mdn) Matches the end of input
}


//  Simple validation of a username with regex
/*Write a simple regex to validate a username. Allowed characters are:
lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

*/
function validateUsr(username) {
  
  return /^[a-z\d_]{4,16}$/.test(username)

  //[a-z\d_], withing the [], a-z matches all characters in the range, \d matches any digit and _ mataches underscore in input
  //{4-16} matches for length of input
  //$ is an Assertion(mdn) Matches the end of input
  //^ is an Assertion(mdn) Matches the beginning of input
}


//  String cleaning
/*Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. 
At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'

Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 
Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.*/

function stringClean(s){
  // Function will return the cleaned string
  
  return `${s}`.replace(/\d/g,'')
}


//  Add Length
/*What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.*/

function addLength(str) {
//start-here
  
  return str.split(' ').map(x => `${x} ${x.length}`)
}


//  Sleigh Authentication
/*Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.
Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

Examples:
var sleigh = new Sleigh();
sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)*/

function Sleigh() {
  
  Sleigh.prototype.authenticate = function(name, password) {
  
  return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false
  // TODO
};
}


//  Printing Array elements with Comma delimiters
/*Input: Array of elements
["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"
Note: if this seems too simple for you try the next level*/

function printArray(array){
  //show me the code!
  
  return array.join()
}


//  Determine offspring sex based on genes XX and XY chromosomes
/*The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";*/

function chromosomeCheck(sperm) {

  return sperm == 'XX' ? "Congratulations! You\'re going to have a daughter." :   "Congratulations! You\'re going to have a son."
  
}


//  Reversing Words in a String
/*You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!*/

function reverse(string){
  //your code here
  
  return string.split(' ').reverse().join(' ')
}


//  Swap Values
/*I would like to be able to pass an array with two elements to my swapValues function to swap the values. 
However it appears that the values aren't changing.
Can you figure out what's wrong here?*/

function swapValues(arr) {
  var args = arr
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}


//  L1: Bartender, drinks!

/*Complete the function that receives as input a string, and produces outputs according to the following table:
Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

function getDrinkByProfession(param){

  param = param.toLowerCase();
  
    switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return  "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
        }

}


//  Welcome to the City
/*Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. 
Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
Example:
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!*/

function sayHello( name, city, state ) {
  
  const nameJoin = name.join(' ');
  
  return `Hello, ${nameJoin}! Welcome to ${city}, ${state}!`
}


//  Grasshopper - Variable Assignment Debug
//  Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

var a = "dev"
var b = "Lab"

var name = a + b


//  Enumerable Magic - Does My List Include This?
//  Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
  // ...
  
  return arr.includes(item)
}


//  Training JS #5: Basic data types--Object
/*Task
Give you a function animal, accept 1 parameter:obj like this:
{name:"dog",legs:4,color:"white"} and return a string like this: "This white dog has 4 legs."
When you have finished the work, click "Run Tests" to see if your code is working properly.
In the end, click "Submit" to submit your code pass this kata.*/

function animal(obj){
  
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}


//  Basic Training: Add item to an Array
/*Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]
The websites array has already been defined for you using the following code:
var websites = [];*/

// add the value "codewars" to the already defined websites array

websites.push("codewars")


//  Sum of differences in array
/*Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).*/

function sumOfDifferences(arr) {
  
  function compareNumbers(a, b) {
  return b - a;
}
  let descArr = arr.sort(compareNumbers)
  
  let sum = 0
  
  if (arr.length != 0) {
    
    for (let i = 0; i < descArr.length - 1; ++i) {
    sum += descArr[i] - descArr[i + 1];
      
    }
    
  } else {
    return 0
  }
  
  return sum
  
  }


  //  Area of a Square
  /*Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
Graph
Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)*/

  function squareArea(A){
    let radius = (A*4)/(2*Math.PI)
    
    return Math.pow(radius, 2)
  }


  //  Find the position!
  /*When provided with a letter, return its position in the alphabet.
  Input :: "a"
  Ouput :: "Position of alphabet: 1"*/

  function position(letter){
    //Write your own Code!
      
      return `Position of alphabet: ${letter.charCodeAt() - 96}`
    }