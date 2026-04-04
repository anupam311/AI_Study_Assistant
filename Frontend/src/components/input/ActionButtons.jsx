function ActionButton(props){
    return(
        <button className="action-btn" 
            onClick={() => props.onClickAction(props.type)}
            disabled={props.disabled}
        >
            {props.fill}
        </button>
    )
}

export default ActionButton