/**
 * async/await
 * Promise를 사용하는 코드를 더 좋게 보이게 하는 것
 */

const getMovies = () => {
    fetch("https://google.com")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(e => console.log(`❌ ${e}`));
};

//await는 이 Promise가 끝날 때까지 기다려준다.
const getMoviesAsync = async() => {
    const response = await fetch("https://yts.am/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
};

getMoviesAsync();