/**
 * spread
 * ... 는 array 속의 데이터를 보여주는 것이 아니라
 * aaray 안에 들어있는 변수들을 보여준다.
 */
const friends = [1, 2, 3, 4];

console.log(...friends);

const sexy = {
    name: "nico",
    age: 24
};

const hello = {
    sexy: true,
    hello: "hello"
};

console.log({...sexy, ...hello});