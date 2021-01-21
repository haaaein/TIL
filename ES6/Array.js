//Array.of는 array로 만들어줌. element가 많을 때 유용
const friends = Array.of("haein", "minju", "haeju");

console.log(friends);

const buttons = document.getElementsByClassName("button");

//array를 얻지 못하고 array-like-object를 얻을때 array로 바꿔준다.
//Array.from
Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => console.log("I ve been clicked"));
});

//Array.find
const friedns = [
    "haein@gmail.con",
    "me@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "spring@korea.com"
];

const target = friends.find(friend => friend.includes("@korea.com"));

//Array.findIndex (return index)
const check = () => friends.findIndex(friend => friend.includes("@korea.com"));

let target = check();

const username = friends[target].split("@")[0];

const email = "korea.com";

friends[target] = `${username}@{email}`;

target = check();

console.log(target);

//Array.fill
const friedns = [
    "haein@gmail.con",
    "me@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "spring@korea.com"
];

friends.fill("*".repeat("5"));

console.log(friends);

//Array.include 
//Array에서 어떤 걸 갖고 있는지 알고 싶을 때

friends.includes("haein@gmail.com");
//return true  or false

