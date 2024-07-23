import React from "react";
import {data} from "./Data";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SideMenu from "./SideMenu";

function Nav() {

    const [toggle, setToggle] = React.useState(true);

    return (
        <>
            <nav>
                <Link className={"logo"} to={"/"}>
                    <img src={data.logo.img} alt={data.logo.alt}/>
                </Link>

                <div className="link-wrapper">
                    {data.links.map((itm, idx)=>
                        <NavLink key={idx} to={itm.path} activeclassname={"active"}>{itm.name}</NavLink>
                    )}
                </div>
                <div className={"drop-down"} onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon icon={"bars"} size={"2x"}/>
                </div>


            </nav>
            <SideMenu toggle={toggle} setToggle={setToggle}/>
        </>
    )
}

export default Nav;