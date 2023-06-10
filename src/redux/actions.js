
// Async Actions
export const getUsersListThunk = () => async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        dispatch(setUsersList(users))
}

export const addUserThunk = (user) => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    dispatch(addUser(users))
}

export const EditUserThunk = (user) => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    dispatch(updateUser(users))
}

export const DeleteUserThunk = (user) => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    dispatch(deleteUser(users))
}


// Sync Actions
export const setUsersList = (data) => {
    return {
        type: "USER_LIST",
        payload: data
    }
}

export const addUser = (data) => {
    return {
        type: "ADD_USER",
        payload: data
    }
}

export const updateUser = (data) => {
    return {
        type: "EDIT_USER",
        payload: data
    }
}

export const deleteUser = (data) => {
    return {
        type: "DELETE_USER",
        payload: data
    }
}
