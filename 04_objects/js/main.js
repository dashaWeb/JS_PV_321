
// let student = new Object();
// student.name = "Pavlo";
// student.age = 19;

// console.log(student)

// let key = "surname"

// let student = {
//     name:"Olena",
//     year: 2000,
//     email:"olena@gmail.com",
//     [key] : "Bondar",
//     getAge: function()
//     {
//         return new Date().getFullYear() - this.year;
//     }

// }

// console.log(student)
// student.group = "PV321"
// student["mark history"] = 12

// console.log(student["name"])

// // for (const key in student) {
// //     document.write(`<p> ${key} : ${student[key]} </p>`)
// // }

// document.write(Object.keys(student))
// Object.keys(student).forEach((key) => { document.write(`<p> ${key} : ${student[key]} </p>`)})



// function Student(name,year)
// {
//     this.name = name;
//     this.year = year;
// }


// let ivan = new Student("Ivan",2000);
// let olena = new Student("Olena",1990);

// console.log(ivan)
// console.log(olena)

// Student.prototype.group = "PV321";
// Student.prototype.getAge = (year) => new Date().getFullYear() - year;

// ivan.group = "PD222"

// console.log(ivan.group)
// console.log(olena.group)

// console.log("name" in ivan)
// delete ivan.name
// console.log(ivan)


let ford = Object.create({
    CalculateDistancePerYear: function() 
    {
        Object.defineProperty(this,"distanceYear",{
            value:(this.distance / this.age).toFixed(2),
            enumerable:false
        })

    }
},{
    model:{
        value:"Ford",
        writable:true,
        configurable:false,
        enumerable:true
    },
    year:{
        value:2000,
        writable:false
    },
    distance:{
        value:4546,
        writable:true,
        enumerable:true,
        configurable:true
    },
    age:{
        get:function(){
            console.log("get value")
            return new Date().getFullYear() - this.year
        },
        set:function()
        {
            console.log("edit value")
        }
    }
    
})

for (const key in ford) {
    console.log(key)
}

Object.keys(ford).forEach((x)=>console.log(x))