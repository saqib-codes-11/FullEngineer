
import {Link} from "react-router-dom";

function Item(props){

    const shortHand = props.obj.name.replace(/\s/g, '').toLowerCase();

    return(
        <Link className="item" to={/list/+shortHand}>
            <h1>{props.obj.name}</h1>
        </Link>
    )
}

export default Item;