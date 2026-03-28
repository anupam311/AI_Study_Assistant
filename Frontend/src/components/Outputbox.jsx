import StorageTab from "./StorageTab";
import StoragePanel from "./StoragePanel";

function OutputBox() {
    return(
        <div className="box">
            <div className="heading">
                <h2>Output Box</h2>

                <textarea 
                className="output" 
                placeholder="Output Will Appear here"
                disabled></textarea>
            </div>
            
            <div className="output-box" hidden>
                <div className="tab-group">
                    <StorageTab id="summary-tab" fill="Summary" />
                    <StorageTab id="keypoints-tab" fill="Key Points" />
                    <StorageTab id="quiz-tab" fill="Quiz" />
                    <StorageTab id="beginner-tab" fill="Explanation (Beginner)" />
                    <StorageTab id="intermediate-tab" fill="Explanation (Intermediate)" />
                    <StorageTab id="advanced-tab" fill="Explanation (Advanced)" />
                </div>

                <div className="panel-group">
                    <StoragePanel id="summary-panel" />
                    <StoragePanel id="keypoints-panel" />
                    <StoragePanel id="quiz-panel" />
                    <StoragePanel id="beginner-panel" />
                    <StoragePanel id="intermediate-panel" />
                    <StoragePanel id="advanced-panel" />
                </div>
            </div>

        </div>
    );
}

export default OutputBox