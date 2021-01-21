//Sexy Strings
const sayHi = (aName = "anon") => `hello ${aName} lovely to have you`;

console.log(sayHi());

console.log(`hello how are you ${1000 * 39383} `);

const add = (a, b) => a + b;

console.log(`hello how are you ${add(6, 6)} `);
//function도 가능!!

const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "Hello";
    div.append(h1);
    wrapper.append(div);
};

setTimeout(addWelcome, 5000);

//HTML Fragments
const addWelcome = () => {
    const div = `
        <div class = "hello">
            <h1 class = "title">Hello</h1>
        </div> 
    `;
    wrapper.innerHTML = div;
};

setTimeout(addWelcome, 2000);

//map은 무엇을 return 하던지 array로 만든다!!!!
const wrapper = document.querySelector(".wrapper");

const friends = ["me", "you", "he", "she"];

const list = `
    <h1>People I love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}<li>`).join(" ")}
    </ul>
`;
//array로 생성되기 때문에 ,가 붙는다. join " " 으로 합쳐주면 안붙음

wrapper.innerHTML = list;

//Cloning Styled Components
const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        //args의 첫번째 element만 필요하기 때문에
        const styles = args[0];
        el.style = styles;
        return el;
    };
};

const title = styled("h1")`
    border-radius: 10px;
    color: blue;
`;

const subtitle = styled("span")`
    color: green;
`;

title.innerText = "We just cloned";
subtitle.innerText = "styled Components";

document.body.append(title, subtitle);

/**
 * include 찾고 싶은 문자가 있는지 확인해준다.
 */

 const isEmail = email => email.include("@");

 console.log(isEmail("haaaein@naver.com"));

 /**
  * string.repeat 원하는 어떤 글자든 반복할 수 있다.
  */

const CC_NUMBER = "6060";

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;

console.log(displayName);

/**
 * string.startsWith, endsWith
 * 유효성 검사할 때 사용 가능! 
 */

 const names = "Mr.Nicolas";

 console.log(names.startsWith("Mr"));


