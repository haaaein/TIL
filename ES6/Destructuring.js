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

/**
 * Array Destructuring
 * 가져온 정보를 조작 하지 않을 때 쓰기 좋다.
 */

const days = () => ["Mon", "Tue", "Wed"];

const [mon, tue, wed, thu = "Thu"] = days();

console.log(mon, tue, wed);

/**
 * Renaming
 */

const settings = {
    color: {
        chosen_color: "dark"
    }
};

const {
    color: { chosen_color: chosenColor = "light "}
} = settings;

console.log(chosenColor);

//or

let chosenColor = "blue";

({
    color: { chosen_color: chosenColor = "light "}
} = settings);

/**
 * Function Destructuring
 */

 function saveSettings({ notifications, clolor: { theme } }) {
    console.log(color);
 }

 saveSettings({
     notifications: {
        follow: true,
        alert: true,
        mkt: true,
     },
     color: {
         theme: "blue"
     }
 });

