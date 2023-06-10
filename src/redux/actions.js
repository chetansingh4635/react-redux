
// Async Actions
export const getUsersListThunk = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    dispatch(setUsersList(users))
}

export const addUserThunk = (data) => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const users = await response.json();
    dispatch(addUser({ ...data, id: Math.floor(Math.random() * 100) }))
}

export const EditUserThunk = (data) => async (dispatch) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        const users = await response.json();
    } catch (e) {
    } finally {
        dispatch(updateUser(data))
    }
}

export const DeleteUserThunk = (data) => async (dispatch) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`,
        {
            method: 'DELETE'
        }
    );
    const users = await response.json();
    dispatch(deleteUser(data))
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

export const deleteUser = (id) => {
    return {
        type: "DELETE_USER",
        payload: id
    }
}
