import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    colorMode:false
}

const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        changeColorMode: (state,action)=>{
            state.colorMode=!state.colorMode;

            if(state.colorMode){
                document.body.classList.remove("dark")
                document.body.classList.add("light")
            }else{
                document.body.classList.remove("light")
                document.body.classList.add("dark")
            }
        }
    },
});

export const {changeColorMode}=colorSlice.actions;

export default colorSlice.reducer;