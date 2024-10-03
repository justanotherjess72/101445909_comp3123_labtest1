/*
Jessica Lee 
Student Id: 101445909 

Question 1: ES6 Features
● Create a script with a function named lowerCaseWords that takes a mixed array as input. 
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words
● Input : const mixedArray=[‘PIZZA’, 10, true, 25, false, ‘Wings’]
● Output [‘pizza’,’wings’]
*/

const lowerCaseWords = (mixedArray) => {

    return new Promise((resolve) =>{

        const outcome = mixedArray.filter(foodItem => typeof foodItem === 'string')
            .map(foodItem => foodItem.toLowerCase());
        resolve(outcome);

    });

};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).then(console.log).catch(console.error); 