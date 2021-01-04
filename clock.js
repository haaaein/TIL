const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = data.getMintues();
    const hours = data.getHours();
    const seconds = data.getSeconds();
    clockTitle.innerText = `${
        housrs < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds
    }`;

}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();