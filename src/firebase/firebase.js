import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeR1o-EVFUEhej04PSwY78wPGWXS7duj8",
    authDomain: "expensify-34ea0.firebaseapp.com",
    databaseURL: "https://expensify-34ea0.firebaseio.com",
    projectId: "expensify-34ea0",
    storageBucket: "expensify-34ea0.appspot.com",
    messagingSenderId: "519194978661",
    appId: "1:519194978661:web:d350405ba0454ce71c198c",
    measurementId: "G-SZHXS6G20Y"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

export  { firebase , database as default };

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         let expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id : childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     }).catch((err) => console.log(err));

// database.ref('expenses').push({
//     description : 'shopping',
//     note : 'ordered frm amazon',
//     amount : 1243,
//     createdAt : 2345342363
// });
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((err) => console.log(err));

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.position} at ${val.job.company}`)
// });

// setTimeout(() => {
//     database.ref().update({'job/company' : 'Microsoft'});
// }, 2500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error while fetching data', e);
// });

// setTimeout(() => {
//     database.ref('age').set(27);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref().set({
//     name : 'Omkar Bhabal',
//     age: 26,
//     isSingle : true,
//     stressLevel : 6,
//     location : {
//         city : 'Republic of Dombivli',
//         country : 'India'
//     },
//     job: {
//         position : 'Software Developer',
//         company :  'Google'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log(' this failed ', error);
// });

// database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Dombivli');



// database.ref('attributes').set({
//     height : 160,
//     weight : 60
// }).then(() => {
//     console.log('attribute added')
// }).catch((err) => console.log(err));

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('removed')
//     }).catch(err => {
//         console.log(err)
//     });

//removing using set
// database.ref('isSingle').set(null);

//update
// database.ref().update({isSingle : null, name : 'Oscar', age : 21, job : 'Manager', 'location/city' : 'Thane'})
//     .then(() => console.log('data updated'))
//     .catch((err) => console.log(err));

//exercise -change in company

// database.ref().update({
//     'job/company': 'Amazon',
//     'location/city': 'Hyderabad',
//     stressLevel : 9
// })