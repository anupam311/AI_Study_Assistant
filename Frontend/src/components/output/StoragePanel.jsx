import { marked } from "marked";

function StoragePanel({ value }){
    
    const htmlContent = marked.parse(value || "");

    return(
        <div
            className="panels" 
            dangerouslySetInnerHTML={{ __html: htmlContent}} 
            />
    );
}

export default StoragePanel