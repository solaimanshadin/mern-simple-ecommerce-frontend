export const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'STORE_USER_DATA': 
            return {user: action.payload}
        case 'REMOVE_USER_DATA': 
            return []
        default: 
            return state
    }
}