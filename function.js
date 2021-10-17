
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


     
  //q3  

const findFactorial = (num) => {
let ans=1;
if (num == 0 ||num==1 ) {
return ans;
}
else {
for (i=num ;i>1 ;i++)
{
ans =ans *i;
}
}return ans;

}

//q4
const round = function (number) {
return Math.round(number);
}

//q5

const toThePowerOf = function (base, exponent) {
  return Math.pow(base,exponent);

}

//q6
const randomNumber = function () {
 return Math.random();
};

//q7

const oneOrZero = function () {

   return Math.random();


};
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



//q6

const maximumNumber = function (number) {
  
  // TODO: Your code here
 return Math.max.apply(Math,number);

 }




