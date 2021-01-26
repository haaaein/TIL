/**
 * for of loop
 * 루프는 기본적으로 같은 일을 반복적으로 하는 것.
 */

const friends = ["Haein", "MIN", "Kai", "Ho"];

for (let i = 0; u < friends.length; i++) {
    console.log(`${i} I love Kimchi`);
    console.log(friends[i]);
}

const addHeart = (c, i, a) => console.log(c, i, a);
//current item, current index, current array

friends.forEach(addHeart);

friends.forEach(friends => console.log(friends));

//for of

for (const friend of friends) {
    console.log(friend);
}

//break
for (const friend of friends) {
    if (friend === "Haein") {
        break;
    } else {
        console.log(friend);
    }
}

for (const letter of "Hellooo this is very looooooong") {
    console.log(letter);
}