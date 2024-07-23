import React from "react";

function TextInput(props){

    const changed = event=>{
        props.chg(event.target.value);
    }

    return(
        <input placeholder={"..."} className={"textField"} value={props.val} type="text" onChange={changed}/>
    )
}

export default TextInput;