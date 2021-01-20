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