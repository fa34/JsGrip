
function strconvert() {
    var fr = document.getElementById("er").value;
    var fr2 =fr.toUpperCase();
    document.getElementById("low").innerHTML=fr2;



}
function strconvertt() {
    var fr = document.getElementById("eer").value;
    var fr2 =fr.toLowerCase();
    document.getElementById("llow").innerHTML=fr2;



}
function strfinder() {
    var fr = document.getElementById("r").value;
    var fr2 =fr.length;
    document.getElementById("ow").innerHTML=fr2;



}
function strfinderr() {
    var fr = document.getElementById("rr").value;
    
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
      
      for(var x=0; x<fr.length; x++)
      {
        if(UPPER.indexOf(fr[x]) !== -1)
        {
          result.push(fr[x].toLowerCase());
        }
        else if(LOWER.indexOf(fr[x]) !== -1)
        {
          result.push(fr[x].toUpperCase());
        }
        else 
        {
          result.push(fr[x]);
        }
      }

    
    document.getElementById("w").innerHTML=result;



}


function covo() {
  var fr = document.getElementById("vo").value;
  
  var UPPER = 'aeiouAEIOU';
  var LOWER = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = [];
  var result2=[];
  
    for(var x=0; x<fr.length; x++)
    {
      if(UPPER.indexOf(fr[x]) !== -1)
      {
        result.push(fr[x].toLowerCase());
      }
      else if(LOWER.indexOf(fr[x]) !== -1)
      {
        result2.push(fr[x].toUpperCase());
      }
      else 
      {
        result.push(fr[x]);
      }
    }

  
  document.getElementById("co").innerHTML=result.length;
  document.getElementById("wao").innerHTML=result2.length;
}
function sss(){

var str1=document.getElementById("ss").value;



//exclude  start and end white-space
str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
//convert 2 or more spaces to 1  
str1 = str1.replace(/[ ]{2,}/gi," ");
// exclude newline with a start spacing  
str1 = str1.replace(/\n /,"\n");
document.getElementById("s").innerHTML = str1.split(' ').length;
}

function ppp(){

  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    var obb=Object.values(student);
document.getElementById("p").innerHTML=obb;    



}
function pppp(){

  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    var obb=Object.values(student);
document.getElementById("u").innerHTML=obb.length;    



}
function dddd(){

  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    var obb=Object.values(student);
document.getElementById("d").innerHTML=obb;   
delete student.rollno;
var bbb=Object.values(student);
document.getElementById("uuu").innerHTML=bbb;   




}
function volume(){
var radius=document.getElementById("rad").value;

var height=document.getElementById("hei").value;
var volume=2*3.14*radius*height;
document.getElementById("vu").innerHTML=volume;



}
function beta(){
var san=document.getElementById("siso").value;
var sand=[];
var sandd=[];
for(var i=2 ; i<=san ; i++){
if(i%2 !==0){
sand.push(i);
}
else{
  sandd.push(i);
}

}
document.getElementById("sis").innerHTML=sand;
}





function mapa(){

var number=document.getElementById("papa").value;
var sum=0;

for(var i=1 ; i<=number ; i++ ){

  sum=sum+i;
}

document.getElementById("mama").innerHTML=sum;
}


function bhabi(){
var usman=document.getElementById("usma").value;
var sum=0;
for(var i=2 ; i<=usman ; i++)
{

if(i%2 ===0)
{
  sum=sum+i;
}

}

document.getElementById("bha").innerHTML=sum;


}
function bhabia(){
var usman=document.getElementById("usmaa").value;
var sum=1;
for(var i=2 ; i<=usman ; i++)
{

if(i%2 !==0)
{
  sum=sum+i;
}

}

document.getElementById("bhaa").innerHTML=sum;


}

function bhabiaa(){
var usman1=document.getElementById("usmaaa").value;
var usman2=document.getElementById("usmaaaa").value;
var sum;
if(usman1>usman2){
  sum="1st Number is greater";
}
else{
  sum="2nd Number is greater";
}

document.getElementById("bhaaa").innerHTML=sum;


}


function ones(){

var one=document.getElementById("1s").value;
var two=document.getElementById("2s").value;
var three=document.getElementById("3s").value;
var ans;

if(one>two && one>three){
  ans="1st num is greater";
}
else if(two>one && two>three){
  ans="2nd num is greater";
}
else{
  ans="3rd num is greater";
}
document.getElementById("para").innerHTML=ans;
}

///17 progarm
function num(){
var num=document.getElementById("").value;
var num1=num.toString();
document.getElementById("").innerHTML=num1.length



}
/// 16 program
function mull(){
  var fun=function mul(){
  
  
    var num= document.getElementById("").value;
    for(var i=1 ; i<=10 ; i++){
    
    var mul=num*i;
    var mul1=num +" "+"*"+" " + i +" "+"="+mul;
    return mul1;
    
    }
  





}
document.getElementById("").innerHTML=fun;
}

////21 progrm
function che(){
var answer;
var sham=document.getElementById("").value;
if(sham<0){
answer="Number is Negative";
}
else if(sham>0){
  answer="Number is Positive";
}
  else {
    answer="Number is Zero"
  }
document.getElementById("").innerHTML=answer;
}


///// progrm 22
function divi(){
var answer;
var num=document.getElementById("").value;
if(num%5===0 && num%11===0){

answer="Number is divisible by 5 and 11";

}
else{
answer="Number is not divisible by 5 and 11";

}

document.getElementById("").innerHTML=answer;

}

/// progrm 23
function deo(){
  var answer;
  var num=document.getElementById("").value;
  if(num%2===0){
  
  answer="Number is even";
  
  }
  else{
  answer="Number is odd";
  
  }
  
  document.getElementById("").innerHTML=answer;
  
  }

  ///// /24 
  function leap(){
    var answer;
    var num=document.getElementById("").value;
    if(num%4===0){
    
    answer="It is a leap year";
    
    }
    else{
    answer="Not a leap year";
    
    }
    
    document.getElementById("").innerHTML=answer;
    
    }

    //// program 25
    function alpha(){
      var answer ;
var cha=document.getElementById("").value;
var letters=/^[A-Za-z]+$/ ;
if( cha.match(letters) ){
answer="It is an Alpha bet"
}
else{
answer="Try Something else"


}
document.getElementById("").innerHTML=answer;



    }
  //// program 26
  function vowl(){
var input=document.getElementById("").value;
 var answer ;
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
 answer="it is a vowel";
} else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
   answer="It is a constant ";
} else {
    answer="It is something else";
 }

document.getElementById("").innerHTML=answer;


  }


  /// 27 program 

  function asci(){
    var answer;
var input=document.getElementById("").value;
// CHECKING FOR ALPHABET using ASCII values
if ((input_char >= 65 && input_char <= 90)
|| (input_char >= 97 && input_char <= 122))
{
answer="It is an Alphabat"
}

// CHECKING FOR DIGITS using ASCII values
else if (input_char >= 48 && input_char <= 57)
{
  answer="It is a Digit "

}

// OTHERWISE SPECIAL CHARACTER
else{

  answer="Special character;"
}
document.getElementById("").innerHTML=answer;
}


//// 28 program
function cu(){

var input=document.getElementById("").value;
var answer = input*input*input;
document.getElementById("").innerHTML="Cube of given Number "+ answer;



}

//// program 32 
function xzy(){
  var res ;

var a=document.getElementById("w2").value;
if(a%2===1)
{
res="It is not  a prime number";

}
else{
res="It is a prime number";

}
document.getElementById("w1").innerHTML=res;


}


//// program 38
function abc(){
var day;
var cc=document.getElementById("").value
 switch(cc)
 {
case o:
  {
day="sunday";
break ;


  }
  case 1 :
    {
      day="monday";
      break ;
    }
case 2 :
  {
    day="Tuesday";
    break ;

  }
  case 3:
    {
      day="wednesday";
      break ;
    }
    case 4:
      {
        day="thursday";
        break;
      }

case 5 :
  {
    day="friday";
    break ;
  }
  case 6 :
    {
      day="saturday"
    }
    default :
    {
      day="It is not a valid day";
    }








 }

document.getElementById("").innerHTML=day;

}
/////// 
///program 44
let root1, root2;

// take input from the user
let a = //prompt("Enter the first number: ");
let b =// prompt("Enter the second number: ");
let c = //prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}


  ////////////program 46

  function abcd(arr){
var arr1=[];
for (var i=0 ; i<=arr.length ; i++){
if(arr[i]>0){
  arr1.push(arr[i]>0);
}
}

document.getElementById("").innerHTML=arr1.length;


  }

  ////program 47

  function ghi(){
var arr=["ahmd", "javascript","ninja"];
var arrnew=arr.slice(0);





  }


  ////program 49

  function ffg(){
var arr=["adh", "fdfg", "fjf"];
var arr1=arr.splice(1,2);







  }


  /////program50
  var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[5], counts[2], counts[9], counts[4]);
//// program 54



function ghf(){

var arr=["song","atif","sonidhi"];
var arr1=["jung","look","gai"];
var arr2=[].concat(arr,arr1);

}


///program 53
function arrayUnique(array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i] !== a[j])
              a.splice(j--, 1);
      }
  }

  return a;
}

var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];
  // Merges both arrays and gets unique items
var array3 = arrayUnique(array1.concat(array2));
//// program 52
function arrayUnique(array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i] === a[j])
              a.push(1);
      }
  }

  return a.length;
}

var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];
  // Merges both arrays and gets unique items
var array3 = arrayUnique(array1.concat(array2));

////program 51
function arrayUnique(array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i] !== a[j])
              a.push(a[i]!==a[j]);
      }
  }

  return a;
}