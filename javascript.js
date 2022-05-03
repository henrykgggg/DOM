// // alert('hello henry')


// const name= 'john'; 
// const age = 20;

// // concetenation
// console.log('my name is '  + name + 'and i am ' +age);

// console.log('ur name is ' + age + 'and i am ' + name);

// // template strings

// console.log(`my name is ${name}`);

// const s = 'hello world';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.split(', '));

// arrays
 
// const numbers = new Array(1,2,3,4,5); 
// numbers[4]= 'umuneke';
// console.log(numbers);  
/*
const fruits =['apples' ,'mangoes' ,23 ]

fruits.push('amagi'); // adds item at the last element
fruits.unshift('tomatos') // add element at thr beggining
fruits.pop(); // remove element at last

console.log(fruits.indexOf('apples')) // to check the index of element 
console.log(Array.isArray(fruits)) // to check if it is an array
console.log(fruits);*/



// objects

// const person ={
//     fisrstname:'karamaga',
//     last :'ovo',
//     age :40,
//     hobbies:['music' ,'kaka' ,'sport'],
//     adress:{
//       street:'4747474',
//       city:'kigali',
//       state:'me'
//     }

// }
// // console.log(person.fisrstname)

// //distructuring

// // const {fisrstname , hobbies, adress:{city ,state}}=person;

// person.email ='david@gmail.com';

// console.log(person)


// const todos=[
//     {
//         id:1,
//         text:'mama',
//         iscomplete:true
//     },
//     {
//         id:2,
//         text:'mamiiiiiii',
//         iscomplete:true
//     },
//     {
//         id:3,
//         text:'kaka',
//         iscomplete:false
//     }

// ]

// console.log(todos[1].text);

// // forloop
// for(let i=0 ;i <= todos.length ; i++){
//     console.log(todos[i].id)
// }



// foreach 

// todos.forEach(  (todoe)=>{

//     console.log(todoe.text);
// })

// map

// const henryText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(henryText); // map returns an array

// filter 
// const  completed = todos.filter( function(todo){
//     return todo.iscomplete === true;

// })
// console.log(completed)


// const age =23;
// const name ='karamaga'

// console.log('my name is '+name +'and i am '+age)
// console.log(`my name is ${name} and i am ${age}`)
// console.log(name.toUpperCase())

// let array = [1,3,4,5]
// // the first zero is the index no , the second is the index to be removed ,then the rest is element to be added

// array.splice(0,0,6,7,8,9)
// console.log(array)


// const person ={
//     fisrstname:'karamaga',
//     last :'ovo',
//     age :40,
//     hobbies:['music' ,'kaka' ,'sport'],
//     adress:{
//       street:'4747474',
//       city:'kigali',
//       state:'me'
//     }
// }
//  console.log(person.hobbies[1])

// const todos=[
//     {
//         id:1,
//         text:'mama',
//         iscomplete:true
//     },
//     {
//         id:2,
//         text:'mamiiiiiii',
//         iscomplete:true
//     },
//     {
//         id:3,
//         text:'kaka',
//         iscomplete:false
//     }

// ]

// // for (let i=0; i<todos.length;i++){
// //     console.log(todos[i].id);
// // }
// // todos.forEach((hnry)=>{
// //     console.log(hnry.text)
// // })

// const todoText = todos.map((todo)=>{
// return todo.text;

// })
// console.log(todoText)

// const arr =[1,2,3]
// arr.forEach(function(item,index){
//     console.log(index,item);
// });


// const arrays= [3,4,5,6];
// const double = arrays.map(function(item){
//     return item*2;
// });
// console.log(double);

// const intr =[1,2,3]
// const even =intr.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(even);

// const add= (num1, num2 ,result)=>{
//    result= num1+num2;
//     console.log(result);
// }

// add(2,2);

// constructors function


// function Person(firstName, lastname,dob){
// this.firstName=firstName;
// this.lastname=lastname;
// this.dob= new Date(dob);
// this.getFullName= function(){
//     return `${this.firstName} ${this.lastname}`
// }
// }
// instantiate object
// const person1 =new Person('john','doe','4-3-1993');
// const person2 =new Person('john','doe','4-3-1993');
// console.log(person1.getFullName());


// Es6

// class Person{
//   /*method */ constructor(firstName, lastname,dob){
//         this.firstName=firstName;
//         this.lastname=lastname;
//         this.dob= new Date(dob); 
//     }
//     getBirthyear(){
//         return this.dob,this.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastname}`
//     }
// }   
// // instantiate object
// const person1 =new Person('john','doe','4-3-1993');
// const person2 =new Person('john','doe','4-3-1993');
// console.log(person1.getFullName());
// console.log(person1);



// DOM

