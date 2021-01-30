/**
 * async/await
 * Promise를 사용하는 코드를 더 좋게 보이게 하는 것
 */

const getMoviesPromise = () => {
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

/**
 * try catch finally
 */

const getMoviesAsync = async() => {
    try {
        const response = await fetch("https://yts.am/api/v2/list_movies.json");
        const json = await response.json();
        console.log(json);
    } catch (e) {
        console.log(`❌ ${e}`);
    } finally {
        console.log("We are done!");
    }
};

getMoviesAsync();

/**
 * Parallel Async Await
 * 최상위에서 await가 동작해야 한다. 항상 async 함수를 만들어야 한단 뜻!
 */

const getMoviesAsync = async() => {
    try {
        const [moviesResponse, suggestionsResponse] = await Promise.all([
            fetch("https://yts.am/api/v2/list_movies.json"),
            fetch("https://yts.am/api/v2/movie_suggestions.json?movie_id=100")
        ]);
        const [movies, suggestions] = await Promise.all([
            moviesResponse.json(), 
            suggestionsResponse.json
        ]);

        console.log(movies, suggestions);
    } catch (e) {
        console.log(`❌ ${e}`);
    } finally {
        console.log("We are done!");
    }
};

getMoviesAsync();
