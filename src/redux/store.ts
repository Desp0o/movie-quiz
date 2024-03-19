import { configureStore } from "@reduxjs/toolkit";
import linkSlicer from "./LinkSlicer"
import UserSlicer from "./UserSlicer";

const store = configureStore({
    reducer:{
        linkReducer: linkSlicer,
        userReducer: UserSlicer
    }
})

export default store