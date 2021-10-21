
//q1
const sum = function (a, b) {
    // TODO: Your code here
    let sum =a+b;
    return sum;
  };



  //q2 average number
  const average = function (array) {
    // TODO: Your code here
   
 let averagenum =array.reduce((a,b) =>a+b,0)
  

  return averagenum /array.length ;


  }


     
  //q3  

const findFactorial = (num) => {
let factornum =1;
if (num == 0 ||num==1 ) {
return factornum ;
}
else {
for (i=num ;i>1 ;i++)
{
  factornum  =factornum  *i;
}
}return factornum ;

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
  const convertToString = function (array) {

    array.join("   ");
    return array ;
    // TODO: Your code here
  }


//q3
const updateValue = function (array,index,value) {

    let updateval=array.map((array,index)
    
    if (index===i){
    return updateval.array;
  
    });


//q4

const onlyString = function (array) {
  
  for(let i=0; i<6; i++){
    return string;

  // TODO: Your code here
};



//q5

const users = [
  ["Jane", "123456" ],
  ["admin", "abc123" ],
];

const login = function (username, password) {

 
}




//q6

const maximumNumber = function (number) {
  
  // TODO: Your code here
 return Math.max.apply(Math,number);

 }}

 //q7

 const reversString = function (string) {
  string.reverse ();
   return string ;
 }}