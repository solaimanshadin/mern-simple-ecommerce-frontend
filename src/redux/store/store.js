const { createStore } = require("redux");
const { userReducer } = require("../reducers/userReducer");

export const store = createStore(userReducer)