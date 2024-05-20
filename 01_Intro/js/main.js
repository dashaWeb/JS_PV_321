// console.log("I am Main.js")
// document.body.style.backgroundColor = "orange";


// data types
// number  (BigInt)
// string 
// boolean (true, false)
// object
// null
// undefined
// Symbol

// var, let, const

// const PI = 3.14;
// // PI = 25; // Error
// console.log(typeof(PI));
// console.log(PI)
// console.log(typeof(name) + " :: " + name)
// console.log(typeof(flag) + " :: " + flag)

// var flag = true;
// let name = "Anonim";
// let obj = {
//     name:"Anonim"
// }
// console.log(obj, typeof(obj))
// console.log(typeof(undefined))
// console.log(typeof(null))

//alert("Error");
// let res = confirm("Exit");
// res ? document.body.style.backgroundColor = "red" : document.body.style.backgroundColor = "green";
// let name = prompt("Enter name","Pasha")
// console.log(name)

/*
    +  -  *  /  %  ** 
    a++  b--  ++a --b 

    let a = 2
    a++ * 2 => 4
    a = 3
*/
// let a = 2;
// console.log(++a * 2)
// console.log(a)

// let a,b;
// a = +prompt("Enter first number") // 2
// b = +prompt("Enter second number") // 3
// // // 2.9
// console.log(a + " + " + b + " = " + (a+b)); 
// console.log(a + " - " + b + " = " + (a-b)); 
// console.log(a + " * " + b + " = " + (a*b)); 
// console.log(a + " / " + b + " = " + (a/b)); 
// console.log(a + " % " + b + " = " + (a%b)); 
// console.log(a + " ** " + b + " = " + (a**b)); 
//console.log(parseFloat(a) + b); 


// == !=  >  <  >=  <=  ===
// let day = prompt("Enter number day");
// if (day == 1) {
//     console.log("Monday")
//     document.title = "Monday"
// }
// else if (day == 2)
//     console.log("Tuesday")
// else
//     console.error("Error")


// && - and
// || - or
// let number = prompt("Enter number")
// // if(number >= 1 && number <= 20)
// // {

// // }
// // if(number == 1)
// // {
// //     console.log("Ok")
// // }
// // else if(number == 7)
// // {
// //     console.log("Ok")
// // }
// // else if(number == 22)
// // {
// //     console.log("Ok")
// // }
// if(number == 1 || number == 7 || number == 22)
// {
//     console.log("Ok");
// }

// let day = +prompt("Enter number day");

// switch(day) // ===
// {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     default:
//         console.error("Error")
//         break
// }

// let month = +prompt("Enter number month")
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days")
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days")
//         break;
//     case 2:
//         let year = +prompt("Enter year")
//         year % 4 == 0 && year % 100 != 0 || year % 400 ? console.log("29 days") : console.log("28 days")

// }

document.write("<h1> Text </h1>")