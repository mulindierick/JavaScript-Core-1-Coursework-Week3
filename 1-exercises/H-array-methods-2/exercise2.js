/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  var newArr = str.split(' ');  
    var capitailiseFirstLetter = [];  
    newArr.forEach(params => {  
        capitailiseFirstLetter.push(params[0].toUpperCase() + params.slice(1, params.length));  
    });  
    return capitailiseFirstLetter.join(" ");
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
