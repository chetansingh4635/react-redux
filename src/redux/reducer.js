import { combineReducers } from 'redux'

const defaultState = {
    users: []
}
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "USER_LIST":
            return {
                ...state,
                users: action.payload
            }
        case "ADD_USER":
            return {
                ...state,
                users: state.users.concat([action.payload])
            }
        case "EDIT_USER": {
            const users = state.users.filter(user => user.id !== action.payload);
            return {
                ...state,
                users: users.concat([action.payload])
            }
        }

        case "DELETE_USER": {
            const users = state.users.filter(user => user.id !== action.payload);
            return {
                ...state,
                users: users
            }
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;