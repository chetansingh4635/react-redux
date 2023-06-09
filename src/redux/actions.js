// function fetchingJoke() {
//     return (dispatch) => {
//         fetch('https://official-joke-api.appspot.com/random_joke')
//             .then(resp => resp.json())
//             .then(joke => dispatch(fetchedJoke(joke)))
//     }
// }

// function fetchedJoke(joke) {
//     return {
//         type: "FETCHED_JOKE",
//         payload: joke
//     }
// }

// export { fetchingJoke }

export const getUsersList = () => async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        dispatch(setUsersList(users))
}

export const setUsersList = (data) => {
    return {
        type: "USER_LIST",
        payload: data
    }
}