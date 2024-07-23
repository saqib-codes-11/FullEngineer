import Toggle from "../inputs/Toggle";

function ContentBlock(props){
    return(
        <div className={"block"}>
            {props.content}
            <Toggle/>
        </div>
    )
}

export default ContentBlock;