export const storeUserData = (payload) => {
    return {
        type: 'STORE_USER_DATA',
        payload
    }
}

export const removeUserData = () => {
    return {
        type: 'REMOVE_USER_DATA'
    }
}