function StorageTab(props){

    if (props.hidden) return null;

    if (props.active) {
        return(
            <button className="tabs active" >{props.fill}</button>
        )
    }

    return(
        <button className="tabs" onClick={props.onClickAction}>{props.fill}</button>
    )
}

export default StorageTab