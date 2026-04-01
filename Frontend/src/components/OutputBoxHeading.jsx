function OutputBoxHeading({hidden}){

    if (hidden) return null;

    return(
        <div className="heading">
            <h2>Output Box</h2>

            <div className="output"> 
                Output Will Appear here
            </div>
        </div>
    );
}

export default OutputBoxHeading