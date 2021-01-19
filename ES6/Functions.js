/*
map이 하는 일은 각각의 아이템마다 함수를 호출한다.
map은 무조건 어떤 값을 return 해야한다. 
ex> return 0; 
or return items + "💖";
*/

const names = ["Haein", "Haeju", "Minju"];

function addHeart(item) {
    return item + "💖";
};

const hearts = names.map(addHeart);

console.log(hearts);

/**
 *  새로운 function을 만들지 않고 더 보기 좋기 하기 위해
 *  map 대신 arrow function을 사용한다. =>
 */

const names = ["Haein", "Haeju", "Minju"];

//version1
const hearts = names.map((item, index) => {
    console.log("We are on ", index);
    return item + "💖";
});

/**
 * version2 
 * implicit return
 * 같은 줄에 뭘 적던지 간에 return 된다는 의미
 * but {}를 추가하는 순간 implicit return은 사라진다.
 */

const hearts = names.map(item => item + "💖");
//ex) Haein💖

const hearts = names.map((item, index) => item + "💖" + index);
//ex) Haein💖0

const hearts = names.map(() => " 💖 ");
//ex) 💖

console.log(hearts);

/**
 * arrow function을 사용하면 안될 때!
 * 이벤트 리스너를 붙이고 이벤트 리스너에 function이 있으면
 * 자바스크립트는 그것을 this 키워드에 넣는다.
 * this 관련된거랑 scope 관련된 거
 */

 const haein = {
    name: "Haein",
    age: 23,
    addYear: () => {
        this.age++;
    }
 };

 console.log(haein);
 haein.addYear;
 haein.addYear;
 console.log(haein);

 /**
  * this는 haein을 가리키기 때문에 
  * arrow function을 사용하게 되면 나이가 증가하지 않는다.
  **/

 const haein = {
    name: "Haein",
    age: 23,
    addYear() {
        this.age++;
    }
 };

const emails = [
    "hi@naver.com",
    "name@google.com",
    "haein@gmail.com",
    "yours@nomad.com"
];

const foundMail = emails.find(item => item.includes("@gmail.com"));
//find는 true, false return

console.log(foundMail);

const noGmail = emails.filter(potato => !potato.includes("@gmail"));

//map은 forEach지만 반환된 element들로 새로운 array를 만들어줘.
console.log(noGmail);

emails.forEach(email => {
    console.log(email.split("@")[0]);
})

const cleaned = emails.map(email => email.split("@")[0]);

//object return
const cleaned = emails.map((email, index) => ({
    username: email.split("@")[0],
    index
}));

console.log(cleaned);
console.table(cleaned);

//default값 주는 것.
function sayHi(aName = "anonymous") {
    return "Hello" + aName;
}

console.log(sayHi());

//arrow function
const sayHi = (aName = "anon") => "hello" + aName;

console.log(sayHi());