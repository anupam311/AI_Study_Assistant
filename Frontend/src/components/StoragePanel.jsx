import { marked } from "marked";

function StoragePanel(props){

    if(props.hidden) return null;
    
    const htmlContent = marked(props.value || "");

    return(
        <div
            className="panels" 
            id={props.id}
            dangerouslySetInnerHTML={{ __html: htmlContent}} 
            />
    );
}

export default StoragePanel