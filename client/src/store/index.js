import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers"; // Use 'userReducers' instead of 'rootReducers'

const store = configureStore({
  reducer: {
    user: userReducers, // Use 'userReducers' instead of 'rootReducers'
  },
});

export default store;
