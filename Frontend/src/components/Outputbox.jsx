import StorageTab from "./StorageTab";
import StoragePanel from "./StoragePanel";

function OutputBox({type, outputs}) {

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
                    <StoragePanel id="summary-panel" value={outputs.summary} />
                    <StoragePanel id="keypoints-panel" value={outputs.keypoints} />
                    <StoragePanel id="quiz-panel" value={outputs.quiz} />
                    <StoragePanel id="beginner-panel" value={outputs.beginner} />
                    <StoragePanel id="intermediate-panel" value={outputs.intermediate} />
                    <StoragePanel id="advanced-panel" value={outputs.advanced} />
                </div>
            </div>

        </div>
    );
}

export default OutputBox