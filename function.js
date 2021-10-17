
//q1
const sum = function (a, b) {
    // TODO: Your code here
    let sum =a+b;
    return sum;
  };

  //q2 average number
  const average = function (a, b) {
    // TODO: Your code here
   
 let average =(a +b)/2;
  

  return average;


  }


     
  
  //const findFactorial = function(num){
// YOUR CODE HERE

   

  
  

const findFactorial = (num) => {


if (num == 0) {
return 1;
}
else {
return num * fact( num - 1 );
}

}

//9write a function includeOf that accept two string arguments string, character and returns true if the string contain the character

const includeOf = function (string, character) {
 if ( string.includes(character) 
 ) {
     return true;
 }
 else {
     return false;
 }
   }





// task 2 arry 

//Q1

const addToArray = function (array, string) {

   array.push(string);
      
    return array ;
  
  }



  //Q2

  const convertToString = function (array) {
    // TODO: Your code here
   array. join();
  }
   


