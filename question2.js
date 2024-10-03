/*
Jessica Lee 
Student Id: 101445909 

Question 2: Promises
● Given the script file callbacks.js, write a script that does the following:
o Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
o Create a method rejectedPromise that is similar to 
delayedException and rejects an error message after a timeout of 500ms.
o Call both promises separately and handle the resolved and reject results and then output to the console callbacks.js
const delayedSuccess = () => {
	setTimeout(() => {
		let success = {‘message’: ‘delayed success!’}
		console.log(success);
	}, 500)}

Const delayedException = () => {
	setTimeout(() =>{
		try{
			throw new Error (‘error:delayed exception!’);
		} catch(e) {
			Console.error(e);
		} }, 500)}

delayedSuccess()
delayedException()
• Output
{message : ‘delayed success!’ }
{error: ‘delayed exception!’}

*/

const resolvedPromise = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({ message: 'delayed success!' });

        }, 500);

    });

};

const rejectedPromise = () => {

    return new Promise((_, reject) => {

        setTimeout(() => {

            reject(new Error('error: delayed exception!'));

        }, 500);

    });

};

resolvedPromise().then(result => {

    console.log(result); 

});

rejectedPromise().catch(error => {

    console.error(error); 
    
});
