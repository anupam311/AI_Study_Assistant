import { marked } from "marked";
import { useState } from "react";

function StoragePanel({ value }){

    const [copied, setCopied] = useState(false);
    
    const htmlContent = marked.parse(value || "");

    function handleCopy() {
        if (!value) return;

        navigator.clipboard.writeText(value);
        setCopied(true);

        setTimeout(() => setCopied(false), 1500);
    }
    return(
        <div className="panel-wrapper">
            <button className="copy-btn" onClick={handleCopy}>
                {copied ? "Copied!" : "Copy"}
            </button>

            <div
                className="panels" 
                dangerouslySetInnerHTML={{ __html: htmlContent}} 
            />
        </div>
    );
}

export default StoragePanel