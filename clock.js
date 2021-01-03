const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = data.getMintues();
    const hours = data.getHours();
    const seconds = data.getSeconds();
    clockTitle.innerText = `${housrs}:${minutes}:${seconds}`;
}
function init() {
    getTime();
}

init();