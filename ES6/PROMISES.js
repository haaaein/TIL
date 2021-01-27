//Introduction to Async
const hello = fetch("http://google.com");

console.log("something");

/**
 * Creating Promises
 */

 const amISexy = new Promise((resolve, reject) => {
     setTimeout(resolve, 3000, "Yes you are");
 });

 console.log(amISexy);

 setInterval(console.log, 1000, amISexy);
 //매 초마다

/**
 * Using Promises
 */

const amISexy = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "You are ugly"); //error
});

 amISexy
    .then(result => console.log(result))
    .catch(error => console.log(error));


/**
 * Chaining Promises
 */

 const amISexy = new Promise((resolve, reject) => {
     resolve(2);
 });

 amISexy
    .then(number => {
        console.log(number * 2);
        return number * 2;
        //return 값을 줘야한다.
    })
    .then(otherNumber => {
        console.log(otherNumber * 2);
    });

const timesTwo = number => number * 2;

amISexy
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(() => {
        throw Error("Something is wrong");
    })
    .then(lastNumber => console.log(lastNumber))
    .catch(error => console.log(error));