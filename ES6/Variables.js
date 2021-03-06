
//1. Let and const
 
const name = "Haein";

name = "ME"; //error!

/*
const 는 read-only 이기 때문에 임의로 값 변경 안된다.
variable 값을 overwrite 해야한다면 let 을 사용하면 된다.
default는 const로 할 것!
*/

//2. The future of 'var'

/*
var은 값이 변경되는 것을 쉽게 허용하기 때문에 안쓰는 것이 좋다.
var를 남발한 코드를 보게 된다면 어떤 값이 변경되어야 하고, 변경되면 안되는 것인지
구분하기 어려울 것!
-->
let과 const를 함께 사용하여 구분하는 것이 좋다.
*/