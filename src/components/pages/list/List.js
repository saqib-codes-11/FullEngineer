import {Outlet} from "react-router-dom";

function List(){
    return (
        <div className={"list page-wrapper"}>
            <Outlet/>
        </div>
    )
}

export default List;