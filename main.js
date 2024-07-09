"use strict"
//  const Person=function(firstName,Birthday){
//  this.firstName=   firstName
//   this.Birthday=  Birthday
 
// }
//  const abdallah=new Person("abdallah",1991)
//  console.log(abdallah) ;
//  const ahmad=new Person('ahmad',2010)
//  console.log(ahmad) ;
//  const yahye=new Person('yahye',2010)
// console.log(yahye) ;
// console.log(yahye instanceof Person) ;
// // prototype

// console.log(Person.prototype) ;
// Person.prototype.clac=function(){
//   console.log(2039 - this.Birthday) ;
// }
// abdallah.clac()
// ahmad.clac()

// const person2= function(first,last,age,eyecolor){
//   this.first=first
//   this.last=last
//   this.age=age
//   this.eyecolor=eyecolor
// }
// const somali=new person2('abdallah','mohamed',24,'blue')
// const puntland=new person2('yahye','abdirizak',18,'brown')
// console.log(somali) ;
// console.log(puntland) ;
// person2.prototype.nationalty=function(){
// console.log('somali') ;
// }
// puntland.nationalty()
// console.log(puntland.__proto__) ;
// console.log(puntland.__proto__===person2.prototype) ;
// console.log(person2.prototype.isPrototypeOf(ahmad)) ;
// console.log(person2.prototype.isPrototypeOf(Person)) ;

// // const array=[1,2,3,4,5,5,3,4,3,2,1]
// // const unique=[...new Set(array)]
// // console.log(unique) ;


// const j = [1, 3, 5, 5, 6, 4, 3, 2, 1, 2, 3, 2, 2, 2];
// const uniqueArray = [...new Set(j)];

// console.log(uniqueArray);

// console.log(j.__proto__) ;

// Array.prototype.uniuq=function(){
//   return [...new Set(this)]
// }
// Array.prototype.plus=function(){
// return this.reduce((acc,cur)=>acc+cur,0)
// }
// console.log(j.plus()) ;
// console.log(j.uniuq()) ;

// // 
// const Car=function(speed,modal){
// this.speed=speed
// this.modal=modal
// }
// Car.prototype.acceletarion=function(){
//  this.speed+=10
//  console.log(`${this.modal} is going at ${this.speed}`) ;
// }
// Car.prototype.break=function(){
//  this.speed -=5
//  console.log(`${this.modal} is going at ${this.speed}`) ;

// }

// const bmw=new Car(120,'bmw')
// const merced=new Car(95,"Merceds")
// bmw.acceletarion()
// bmw.acceletarion()
// bmw.acceletarion()
// bmw.acceletarion()
// bmw.break()
// merced.acceletarion()
// merced.acceletarion()
// merced.acceletarion()
// merced.acceletarion()

// //  classes

// class PersonCl{
//   constructor(fullname,brithday){
//     this.fullname=fullname
//     this.brithday=brithday
//   }
//   calcag(){
//     console.log(this.awoowe-2034) ;
//   }

// }
// const yusuf=new PersonCl('abdallah',1999)
// console.log(yusuf) ;
// yusuf.calcag()
// PersonCl.prototype.greet=function(){
//   console.log(`welcome mr ${this.name}`) ;
// }
// yusuf.greet()


// const account={
//   owner:'abdallah',
//   movermets:[100,200,400,500,8000],


// set latest(mov){
// this.movermets.push(mov)
// }
// ,
// get latest(){
//   return this.movermets.slice(-1).pop()
// },

// }
// account.latest=50
// console.log(account.latest)

// class Person3{
//   constructor(magac,dhalashi){
//     this.magac=magac
//     this.dhalashi=dhalashi
//   }
//   set yahye(name){
//     if(name.includes(" ")){this.magac=name
//     }
//   else alert(`${name} is not a full name`)
//   }

//   get full(){
//     return this.magac
//   }
//   get calcag(){
//     return this.dhalashi - 2040
//   }
//   static hey(){
//     console.log(`🙋‍♂️`) ;
//   }
// }
// const abdallah2=new Person3('abdallaha bdirizak', 2014)
// console.log(abdallah2) ;
// abdallah2.full


// abdallah2.calcag
// Person3.hey()
// const igger=new Person3("niggeer nbs", 1999)
// igger.yahye
// console.log(igger) ;

// inheritace Between classes
const Person=function(firrstname,BrithYear){
  this.firrstname=firrstname
  this.BrithYear=BrithYear


}
Person.prototype.calag=function(){
  console.log(this.BrithYear - 2024 ) ; 
}
const student=function(firrstname,BrithYear,courses){
  Person.call(this,firrstname,BrithYear)
  this.courses=courses
}
student.prototype=Object.create(Person.prototype)
student.prototype.introduce=function(){
  console.log(`my name is ${this.firrstname} and am ${this.BrithYear} years old and am studdig ${this.courses}`) ;
}
const mo=new student('mo',2000,'software engineering')

mo.introduce()
mo.calag()
console.log(mo.__proto__)

console.log(mo.__proto__.__proto__) ;
student.prototype.constructor=student
console.dir(student.prototype.constructor)


// const Car=function(speed ,modal){
// this.speed=speed
// this.modal=modal
// }
// Car.prototype.accelation=function(){
//   this.speed+=10
//   console.log(`${this.modal} is going at ${this.speed}`)
// }
// Car.prototype.braek=function(){
//   this.speed-=5
//   console.log(`${this.modal} is going at ${this.speed}`)
// }
// // const bmw=new Car(140,'bmw')
// // bmw.accelation()
// // bmw.accelation()
// // bmw.accelation()
// // bmw.accelation()

// const electric=function(speed , modal ){
//   Car.call(this,speed,modal)

// }
// electric.prototype.charge=function(){
//   console.log(`the speed that you are going is ${this.speed} and the modal of your is ${this.modal} km/h and the remining charger is 95% `) ;
// }

// electric.prototype=Object.create(Car.prototype)
// const elec1=new electric('tesla' ,200)
//  inhertiace the electric car to the Car constructer

const Car = function(speed, model) {
  this.speed = speed;
  this.model = model;
};

Car.prototype.acceleration = function() {
  this.speed += 10;
  console.log(`${this.model} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.model} is going at ${this.speed} km/h`);
};

const Electric = function(speed, model) {
  Car.call(this, speed, model);
};

Electric.prototype = Object.create(Car.prototype);
Electric.prototype.constructor = Electric;

Electric.prototype.charge = function() {
  console.log(`The ${this.model} is going at ${this.speed} km/h and the remaining charge is 95%`);
};

// Create an instance of Electric
const elec1 = new Electric(200, 'Tesla');

// Call the charge method
elec1.charge();

// Demonstrate inherited methods
elec1.acceleration();
elec1.brake();
console.dir(Electric.prototype.constructor)

class Student {
  constructor(firstm,dada){
    this.firstm=firstm
    this.dada=dada
  }
}
class StudentCl extends Student{
  constructor(firstm,dada,ardayga){
    super(firstm,dada)
    this.ardayga=ardayga
  }
   da(){
console.log(`${this.dada -2040}`) ;
  }
}

const araday1=new StudentCl('abdallah',1994,210209905)
araday1.da()