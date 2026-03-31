function StorageTab(props){

    if (props.hidden) return null;

    if (props.active) {
        return(
            <button className="tabs active" id={props.id}>{props.fill}</button>
        )
    }

    return(
        <button className="tabs" id={props.id}>{props.fill}</button>
    )
}

export default StorageTab