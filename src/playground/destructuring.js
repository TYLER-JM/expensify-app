//OBJECT DESTRUCTURING//

// const person = {
//   name: 'Tyler',
//   age: 28,
//   location: {
//     city: 'Halifax',
//     temp: 72
//   }
// };

// const { name = 'Anonymous', age, location } = person
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location


// if (city && temperature) {
//   console.log(`it's ${temperature} in ${city}`);
// }

const book = {
  title: 'The Cunning Man',
  author: 'Robertson Davies',
  publisher: {
    name: 'Doubleday'
  }
}
const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//ARRAY DESTRUCTURING//

// const address = ['123 S Fake Street', 'Springfield', 'Ohio','19383'];
// const [, city, state = 'New York', zip] = address
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumCost] = item
console.log(`A medium ${itemName} costs ${mediumCost}`);