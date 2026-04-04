function StorageTab({  active, fill, onClickAction }) {
    return(
        <button 
            className={`tabs ${active ? "active" : ""}`} 
            onClick={!active ? onClickAction : undefined}
        >
            {fill}
        </button>
    )
}

export default StorageTab