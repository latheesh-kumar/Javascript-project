
// // const myString="developer"
// // const firstLetter=myString.substring(0,1)
// // console.log(firstLetter.toUpperCase()+myString.slice(1));

// // const arr=[1,2,3,4,5]
// // const a=0,b=6
// // let x=Array.of(a,b)
// // let revArr=[...arr,...x]
// // console.log(revArr.sort().reverse())

// const library=[
//     {
//     title:"ikigai",
//     author:"someone",
//     status:{
//             own:true,
//             reading: false,
//             read:false
//     }

// },
// {
//     title:"Ferrai sold his",
//     author:"Robin sharma",
//     status:{
//             own:true,
// //             reading: false,
// //             read:false
// //     }

// // },
// // {
// //     title:"atomic habits",
// //     author:"someone",
// //     status:{
// //             own:true,
// //             reading: false,
// //             read:false
// //     }

// // }
// // ]

// // // library[0].status.read=true
// // // library[1].status.read=true
// // // library[2].status.read=true
// // // console.log(library)

// // // console.log(JSON.stringify(library))

// // // const celsius=a=>console.log((a-32)/(5/9))
// // // celsius(32)
// // // const minMax=(arr)=>{
// // //     let min=Math.min(...arr)
// // //     let max=Math.max(...arr)
// // //     return {min,max}
// // // }

// // // console.log(minMax([30,20,70,10,0,50]))


// // // (function (l,w){
// // //     let areaRect=l*w
// // //     console.log(areaRect)
    
// // // })(5,4)

// // // ((length, width) => {
// // //     const area = length * width;
    
// // //     const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    
// // //     console.log(output);
// // //     })(10, 5);
// // // const arr=[30,20,70,10,0,50];
// // // console.log(isNaN())
// // let result=[];
// // for(let i=0;i<=100;i++){
// //     if(i%3 == 0 && i%5==0){
// //         result.push("FizzBuzz")
        
// //     }else if(i%3==0){
// //         result.push("Fizz")
// //     }
// //     else if(i%5==0){
// //         result.push("Buzz")
// //     }
// //     else{
// //         result.push(i)
// //     }
// // }
// // console.log(result)


const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

//   const youngPeople=people
//   .filter((ppl)=>ppl.age<=25)
//   .map((pplde)=>{
//     return{
//         name: pplde.firstName + " "+pplde.lastName,
//         email:pplde.email
//     }
// })
  
// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const poitiveTotals=numbers
// .filter((number)=>number>0)
// .reduce((acc,curr)=>acc+curr)

// console.log(poitiveTotals)
    
//   console.log(youngPeople)

const words = ['coder', 'programmer', 'developer'];

const capitalized=words.map((word)=>{
    return word.charAt(0).toUpperCase()+ word.slice(1)
})
console.log(capitalized)