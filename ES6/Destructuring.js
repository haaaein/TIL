/**
 * destructuring은 object나 array, 그 외 요소들 안의 변수를 
 * 바깥으로 끄집어 내서 사용할 수 있도록 하는 것.
 */

const settings = {
    notifications: {
        follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        theme: "dark"
    }
};

const { 
    notifications : { follow  = false }
} = settings;

const { color: {theme} } = settings;
//color는 경로일 뿐이고 theme 값을 가져온다.

console.log(notifications);