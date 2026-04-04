import StorageTab from "./StorageTab";
import StoragePanel from "./StoragePanel";
import OutputBoxHeading from "./OutputBoxHeading";
import { useState, useEffect } from "react";

function OutputBox({type, outputs, isStale}) {

    const TABS = {
        summary: "Summary",
        keypoints: "Key Points",
        quiz: "Quiz",
        beginner: "Explanation (Beginner)",
        intermediate: "Explanation (Intermediate)",
        advanced: "Explanation (Advanced)"
    }

    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        if (type) setActiveTab(type);
    }, [type])

    return(
        <div className="box">
            <OutputBoxHeading hidden={!!type} />

            {isStale && type && (
                <div className="stale-warning">
                    ⚠️ Notes changed. Output may be outdated.
                </div>
            )}
            
            <div className="output-box">
                <div className="tab-group">
                    {Object.entries(TABS).map(([key, label]) => {
                        if (!outputs[key]) return null;

                        return (
                            <StorageTab
                                key={key}
                                active={activeTab === key}
                                fill={label}
                                onClickAction={() => setActiveTab(key)}
                            />
                        );
                    })}
                </div>

                <div className="panel-group">
                    {activeTab && (
                        <StoragePanel
                            value={outputs[activeTab]}
                        />
                    )}
                </div>
            </div>

        </div>
    );
}

export default OutputBox