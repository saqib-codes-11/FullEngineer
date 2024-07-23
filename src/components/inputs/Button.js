

function Button(props){
    const clickEvent = ()=>{
        props.click();
    }

    return(
        <input type={"submit"} className={"button"} onClick={clickEvent} value={props.message}/>
    )
}

export default Button;