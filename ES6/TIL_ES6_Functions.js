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