//Array.of는 array로 만들어줌. element가 많을 때 유용
const friends = Array.of("haein", "minju", "haeju");

console.log(friends);

const buttons = document.getElementsByClassName("button");

//array를 얻지 못하고 array-like-object를 얻을때 array로 바꿔준다.
//Array.from
Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => console.log("I ve been clicked"));
});