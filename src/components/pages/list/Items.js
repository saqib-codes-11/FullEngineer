import Item from "./Item";
import {useSelector} from "react-redux";

function Items(){

    const list = useSelector(state=>state.list);

    const listElements = list.map((obj)=>
        <Item key={obj.id} obj={obj}/>
    )
    return(
        <div className="items">
            {listElements}
        </div>
    )
}

export default Items;