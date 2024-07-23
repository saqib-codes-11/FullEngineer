import React from "react";

export default function Cover(props){
    return (
        <div className={"cover"}>
            <h1>{props.content}</h1>
        </div>
    )
}