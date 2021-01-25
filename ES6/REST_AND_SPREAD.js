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

//Spread Applications
const friends = ["nico", "haein"];

const newFriends = [...friends, "dal"];

console.log(newFriends);

const first = ["mon", "tue", "wed"];

const weekend = ["sat", "sun"];

const fullweek = [...first, "thu", "fri", ...weekend];

console.log(fullweek);

//conditional object
const lastName = prompt("Last name");

const user = {
    username: "nico",
    age: 24,
    //lastName: lastName !== "" ? lastName :  undefined
    //lastname이 빈 문자열이 아닐때만 lastName 넣어주고 빈 문자열이면 undefined 
    ...(lastName !== "" && { lastName })
};

console.log(user);

/**
 * rest는 모든 값을 하나의 변수로 축소시켜주는 것.
 */
const infiniteArgs = (...kimchi) => console.log(kimchi);

infiniteArgs(
    "1",
    2,
    true,
    "lalala", 
    ["1", 2, 3, 4]
);

const bestFriendMaker = (firstOne, ...rest) => {
    console.log(`My best friend is ${firstOne}`);
    console.log(rest);
};
    
bestFriendMaker("han", "min", "dal");

const uesr = {
    name: "haein",
    age: 23,
    password: 1234
};

//cleaning objects
const killPassword = ({password, ...rest}) => rest;

const cleanUser = killPassword(user);

console.log(cleanUser);

const setCountry = ({country = "KR", ...rest}) => ({ country, ...rest });
//country default값 설정하기

console.log(setCountry(user));

//변수 값의 이름을 바꿔주는 함수 만들기
const user = {
    NAME: "haeinn",
    age: 23,
    password: 1234
};

const rename = ({NAME:name, ...rest }) => ({ name, ...rest });

console.log(rename(user));
