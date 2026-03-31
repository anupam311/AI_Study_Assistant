function StoragePanel(props){
    return(
        <textarea className="panels" id={props.id} value={props.value} disabled></textarea>
    )
}

export default StoragePanel