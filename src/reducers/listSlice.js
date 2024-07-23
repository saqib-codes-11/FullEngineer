import { createSlice} from "@reduxjs/toolkit";
import {initState} from "../initState";

const initialState = initState.list;

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        personSubmission: (state,action)=>{
            state.push(action.payload)
        }
    },
});

export const {personSubmission}=listSlice.actions;

export default listSlice.reducer;