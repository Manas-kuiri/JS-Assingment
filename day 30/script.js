// //Arithmetic operators

// a=10;
// b=3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// //Assingment operators

// let x=5;
// x+=3;
// console.log(x);
// x-=3;
// console.log(x);
// x*=3;
// console.log(x);
// x/=3;
// console.log(x);

// //increment & Decrement

// let count1 =5;
// console.log("Value Before increment:",count1);
// count1++;
// console.log("Value After Increment :",count1);

// let count2=5;
// console.log("Value Before Decrement:",count2);
// count2--;
// console.log("value After Decrement:",count2);

// //comparison operators

// console.log(5=="5");
// console.log(5==="5")

// //Logical operators

// if(10>5 && 10<20 && 10==10){
//       console.log(true);
// }else{
//       console.log(false)
// }

//Closere function

// function outer(){
//       let count=0;
//       return function(){
//             count++;
//             console.log(count);
//       }
// }
// let counter=outer();
// counter();
// counter();

// BMI Calculator :

// let bmi= function(weight,hight){

//       return (weight/(hight*hight))
// }
// console.log(bmi(38,1.2).toFixed(2));

// Discount Calculator

// function disCountPersentage(Discount){

//       return function finalPrice(price){

//             return (price-(price*(Discount/100)))
//       }
// }

// let discount=disCountPersentage(10);
// let finalPrice=discount(400)
// console.log(finalPrice);

