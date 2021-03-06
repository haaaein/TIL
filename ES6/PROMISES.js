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

/**
 * Promise.all
 */

const p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise(resolve, reject => {
    setTimeout(reject, 5000, "I hate JS");
});

const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.all([p1, p2, p3]);

motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err));

/**
 * Promise.race
 */

Promise.race([p1, p2, p3])
    .then(values => console.log(values))
    .catch(err => console.log(err));

/**
 * Finally
 */

const p1 = new Promise(resolve, reject => {
    setTimeout(reject, 5000, "First");
})
    .then(value => console.log(value))
    .catch(e => console.log(`${e} ❌`))
    .finally(() => console.log("I'm done"));

/**
 * Real World Promises
 * fetch가 하는 일은 뭔가를 가지고 오는 것.
 */

fetch("https://google.com")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(e => console.log(`❌ ${e}`));


