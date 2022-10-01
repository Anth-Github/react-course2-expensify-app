// console.log('destructuring!');


// const person = {
  
//   age: 20,
//   location: {
//       city: 'Delhi',
//       temp: 32
//   }  
// };

// // const name = person.name;
// // const age = person.age;

// const {name: firstname ='Anonymous', age, location} = person;

// console.log(`${firstname} is ${age} years Old!`);


// const {city, temp: temperature} = person.location;


// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }



const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};


const {name: publishername = 'Self-published'} = book.publisher;
console.log(publishername);






console.log('Array destructuring');


// Array destructuring.


const address = ['1299 S Juniper street', 'Philadelphia', 'Pennsylvania', '19147'];


const [, , state = 'New york'] = address;
console.log(`you are in ${state}`);


const item = ['coffee (hot)', '2', '4','6'];

const [coffee, , cost] = item;
console.log(`A medium ${coffee} costs ${cost}`);



























