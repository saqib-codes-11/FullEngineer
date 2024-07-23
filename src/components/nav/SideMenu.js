
import {Link} from "react-router-dom";
import React from "react";
import {data} from "./Data";

function SideMenu(props){


    const checkToggle = () => {
        return (props.toggle ? "-100%" : "0")
    }

    let style = {
        right: checkToggle()
    }

    return(
        <div className="side-bar" style={style}>
            {data.links.map((itm, idx)=>
                <Link key={idx} to={itm.path} onClick={() => props.setToggle(!props.toggle)}>{itm.name}</Link>
            )}
        </div>
    )
}

export default SideMenu;