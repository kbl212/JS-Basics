//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

var inner = outer();

//Once you do that, invoke inner.

  //Code Here
inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var friendMessage = callFriend();
var finalMessage = friendMessage("435-215-9248");
console.log(finalMessage);


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here

var makeCounter = function() {
    var counter = 0;
   		 function countFunc() {
       		 counter = counter + 1;
       		 return counter;
   		 }
   	 return countFunc;
}  
var count = makeCounter();
  count() // 1 ...add alerts to each of these function calls
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that does something simple (console, alert, etc). Write a second function that accepts the first function as it's first parameter. The second function should return a new third function which, when invoked, invokes the first, original function that was passed in, but will only ever do so once.
*/

  //Code Here
function simpleFunc() {
    alert("hi");
}

function secondFunc(simpleFunc) {
    var count = 0;
    for (var i = 0; i < 1; i++) {
    	return function() {
     	   simpleFunc();
        }
    }
}

var kyle = secondFunc(simpleFunc);
(kyle());

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

function simpleFunc() {
    alert("hi");
}

function fnCounter(myFunc, N) {
    for (var i = 0; i < N; i++) {
       myFunc();
    }
    return "STOP";
}

fnCounter(simpleFunc, 10);

//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here



//Next Problem


var myArray = []
var func0 = function() {alert("0"); return 0;};
var func1 = function() {alert("1"); return 1;};
var func2 = function() {alert("2"); return 2;};
var func3 = function() {alert("3"); return 3;};
var func4 = function() {alert("4"); return 4;};
var func5 = function() {alert("5"); return 5;};
myArray.push(func0);
myArray.push(func1);
myArray.push(func2);
myArray.push(func3);
myArray.push(func4);
myArray.push(func5);

function funcArray(arr) {
    for (var i = 0; i < arr.length; i++) {
       arr[i]();
    }
}

funcArray(myArray);
/*
  Make the following code work
*/
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5
/*
  *Hint: Don't let this fool you. Break down what's really happening here.
*/


