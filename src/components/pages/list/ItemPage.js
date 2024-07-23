import React from "react";
import {NavLink, Outlet, useParams} from "react-router-dom";
import {useSelector} from "react-redux";


function ItemPage() {

    const list = useSelector(state => state.list);
    const params = useParams();
    const [itm, setItem]=React.useState(list.find(obj => obj.name.replace(/\s/g, '').toLowerCase() === params.itemId))

    React.useEffect(()=>{
        setItem(list.find(obj => obj.name.replace(/\s/g, '').toLowerCase() === params.itemId))
        },[params,list])

    return (
        <div className="item-page">

            {itm === undefined && <h1>The Item you are looking for does not exist</h1>}

            {itm !== undefined && <div className="item-wrapper">
                <div className={"splash"}>
                    <h1>{itm !== undefined && itm.name}</h1>
                </div>

                <div className="item-navigation">

                    <NavLink activeclassname={"active"} to={"/list/" + params.itemId} end>Main</NavLink>
                    <NavLink activeclassname={"active"} to={"/list/" + params.itemId + "/descr"}>Description</NavLink>


                </div>
                <div className="item-content">
                    <div className="content-wrapper">
                        <Outlet/>
                    </div>
                </div>
            </div>}


        </div>
    )
}

export default ItemPage;