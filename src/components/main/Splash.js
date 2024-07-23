import React from "react";

export default function Splash(props){
    return(
        <div className="splash">
            <div className={"cover"}>
                <h1>{props.content}</h1>
            </div>
        </div>

    )
}