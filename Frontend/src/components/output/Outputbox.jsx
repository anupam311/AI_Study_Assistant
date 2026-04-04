import StorageTab from "../StorageTab";
import StoragePanel from "../StoragePanel";
import OutputBoxHeading from "../OutputBoxHeading";
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

    const [activeTab, setActiveTab] = useState({
            summary: false,
            keypoints: false,
            quiz: false,
            beginner: false,
            intermediate: false,
            advanced: false,
        });

    function handle_ActiveTab_HiddenPanels(type) {
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

        setActiveTab({
            summary: false,
            keypoints: false,
            quiz: false,
            beginner: false,
            intermediate: false,
            advanced: false
        });

        setActiveTab(prev => ({
            ...prev,
            [type]: true
        }));
    }

    useEffect(() => {

        handle_ActiveTab_HiddenPanels(type);

        setHiddenTabs(prev => ({
            ...prev,
            [type]: false
        }));

    }, [type])

    return(
        <div className="box">
            <OutputBoxHeading hidden={!!type} />
            
            <div className="output-box">
                <div className="tab-group">
                    <StorageTab active={activeTab.summary} hidden={hiddenTabs.summary} fill="Summary" onClickAction={() => {handle_ActiveTab_HiddenPanels("summary")}} />
                    <StorageTab active={activeTab.keypoints} hidden={hiddenTabs.keypoints} fill="Key Points" onClickAction={() => {handle_ActiveTab_HiddenPanels("keypoints")}} />
                    <StorageTab active={activeTab.quiz} hidden={hiddenTabs.quiz} fill="Quiz" onClickAction={() => {handle_ActiveTab_HiddenPanels("quiz")}} />
                    <StorageTab active={activeTab.beginner} hidden={hiddenTabs.beginner} fill="Explanation (Beginner)" onClickAction={() => {handle_ActiveTab_HiddenPanels("beginner")}} />
                    <StorageTab active={activeTab.intermediate} hidden={hiddenTabs.intermediate} fill="Explanation (Intermediate)" onClickAction={() => {handle_ActiveTab_HiddenPanels("intermediate")}} />
                    <StorageTab active={activeTab.advanced} hidden={hiddenTabs.advanced} fill="Explanation (Advanced)" onClickAction={() => {handle_ActiveTab_HiddenPanels("advanced")}} />
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