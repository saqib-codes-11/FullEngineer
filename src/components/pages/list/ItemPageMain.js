import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import React from "react";

function ItemPageMain(){

    const list = useSelector(state => state.list);
    const params = useParams();
    const [itm, setItem]=React.useState(list.find(obj => obj.name.replace(/\s/g, '').toLowerCase() === params.itemId))

    React.useEffect(()=>{
        setItem(list.find(obj => obj.name.replace(/\s/g, '').toLowerCase() === params.itemId))
    },[params,list])

    return(
        <div className="item-page-descr">
            {itm.story}
        </div>
    )
}

export default ItemPageMain