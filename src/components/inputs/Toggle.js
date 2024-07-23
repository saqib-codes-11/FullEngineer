import React from "react";

function Toggle(props){

    const [mode,setMode]=React.useState(()=>{return(true)});

    const clicked=()=>{
        setMode(!mode);
        props.toggled();
    }

    return(
        <div className={"toggle "+mode} onClick={()=>clicked()}>
            <div className={"circle "+mode}></div>
        </div>
    )
}

export default Toggle;