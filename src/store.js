import {configureStore} from "@reduxjs/toolkit";
import colorSlice from "./reducers/colorSlice";
import listSlice from "./reducers/listSlice";

const store = configureStore({
    reducer:{
        color: colorSlice,
        list: listSlice
    }
})

export default store;