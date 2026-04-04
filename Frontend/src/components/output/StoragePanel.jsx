import { marked } from "marked";

function StoragePanel({ value }){
    
    const htmlContent = marked(value || "");

    return(
        <div
            className="panels" 
            dangerouslySetInnerHTML={{ __html: htmlContent}} 
            />
    );
}

export default StoragePanel