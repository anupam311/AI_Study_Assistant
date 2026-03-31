import StorageTab from "./StorageTab";
import StoragePanel from "./StoragePanel";
import { useState, useEffect } from "react";

function OutputBox({type, outputs}) {

    const [hiddenPanels, setHiddenPanels] = useState({
            summary: true,
            keypoints: true,
            quiz: true,
            beginner: true,
            intermediate: true,
            advanced: true,
        });

    const [hiddenTabs, setHiddenTabs] = useState({
            summary: true,
            keypoints: true,
            quiz: true,
            beginner: true,
            intermediate: true,
            advanced: true,
        });

    const [activeTabs, setActiveTabs] = useState({
            summary: false,
            keypoints: false,
            quiz: false,
            beginner: false,
            intermediate: false,
            advanced: false,
        });

    useEffect(() => {
        setHiddenPanels({
            summary: true,
            keypoints: true,
            quiz: true,
            beginner: true,
            intermediate: true,
            advanced: true,
        });

        setHiddenPanels(prev => ({
            ...prev,
            [type]: false
        }));

        setHiddenTabs(prev => ({
            ...prev,
            [type]: false
        }));

        setActiveTabs({
            summary: false,
            keypoints: false,
            quiz: false,
            beginner: false,
            intermediate: false,
            advanced: false
        });

        setActiveTabs(prev => ({
            ...prev,
            [type]: true
        }));

    }, [type])

    return(
        <div className="box">
            <div className="heading">
                <h2>Output Box</h2>

                <textarea 
                className="output" 
                placeholder="Output Will Appear here"
                disabled></textarea>
            </div>
            
            <div className="output-box">
                <div className="tab-group">
                    <StorageTab active={activeTabs.summary} hidden={hiddenTabs.summary} fill="Summary" />
                    <StorageTab active={activeTabs.keypoints} hidden={hiddenTabs.keypoints} fill="Key Points" />
                    <StorageTab active={activeTabs.quiz} hidden={hiddenTabs.quiz} fill="Quiz" />
                    <StorageTab active={activeTabs.beginner} hidden={hiddenTabs.beginner} fill="Explanation (Beginner)" />
                    <StorageTab active={activeTabs.intermediate} hidden={hiddenTabs.intermediate} fill="Explanation (Intermediate)" />
                    <StorageTab active={activeTabs.advanced} hidden={hiddenTabs.advanced} fill="Explanation (Advanced)" />
                </div>

                <div className="panel-group">
                    <StoragePanel value={outputs.summary} hidden={hiddenPanels.summary} />
                    <StoragePanel value={outputs.keypoints} hidden={hiddenPanels.keypoints} />
                    <StoragePanel value={outputs.quiz} hidden={hiddenPanels.quiz} />
                    <StoragePanel value={outputs.beginner} hidden={hiddenPanels.beginner} />
                    <StoragePanel value={outputs.intermediate} hidden={hiddenPanels.intermediate} />
                    <StoragePanel value={outputs.advanced} hidden={hiddenPanels.advanced} />
                </div>
            </div>

        </div>
    );
}

export default OutputBox