// const person = {
//     name : 'Omkar',
//     age : 20,
//     location : {
//         city : 'Dombivli',
//         temp : 92
//     }
// }

// const { name: firstName = 'Anonymous' , age } = person;
// console.log(`${firstName} is ${age}`);

// const { city , temp : temperature } = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const  {location } = person;
// console.log(location);

const address = ['fr.Agnel vashi jail', 'jail road', 'vashi','420110'];
const [, city, state] = address;
console.log(`You are in ${city} ${state}. `);