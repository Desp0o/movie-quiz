import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
    name: 'userSlicer',
    initialState:{
        name:'despo'
    },
    reducers:{
        setUserName(state, action){
            state.name = action.payload
        }
    }
})

export const { setUserName } = userSlicer.actions
export default userSlicer.reducer