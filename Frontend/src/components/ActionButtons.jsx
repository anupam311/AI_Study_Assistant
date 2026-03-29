function ActionButton(props){
    return(
        <button className="action-btn" onClick={() => props.onClickAction(props.type)}>
            {props.fill}
        </button>
    )
}

export default ActionButton