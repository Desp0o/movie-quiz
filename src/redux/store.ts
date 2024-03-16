import { configureStore } from "@reduxjs/toolkit";
import linkSlicer from "./LinkSlicer"

const store = configureStore({
    reducer:{
        linkReducer: linkSlicer
    }
})

export default store