import React from "react";

function ColumnBlock(props){
    return(
        <div className="block tall">
            {props.content}
        </div>
    )
}

export default ColumnBlock;