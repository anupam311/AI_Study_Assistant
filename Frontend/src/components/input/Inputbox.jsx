import { useState } from "react"
import ActionButton from "./ActionButtons"
import { get_output } from "../../services/aiService";

function InputBox({setType, setOutputs, setLoading, setError, setIsStale, isStale, outputs}) {
    
    const [notes, setNotes] = useState("");
    const [level, setLevel] = useState("beginner");
    const [lastSubmittedNotes, setLastSubmittedNotes] = useState("");

    const explainDisabled =
        outputs.beginner &&
        outputs.intermediate &&
        outputs.advanced;

    const errorMessages = {
        RATE_LIMIT: "Daily limit reached. Please try again tomorrow.",
        SERVER_DOWN: "Server is currently down. Please try again later.",
        TIMEOUT: "Request took too long. Please try again.",
        NETWORK_ERROR: "Network error. Please check your connection."
    };

    function handleLevelChange(value) {
        setLevel(value)
    }

    function handleNotesChange(e) {
        const newValue = e.target.value;
        setNotes(newValue);

        if (newValue !== lastSubmittedNotes) {
            setIsStale(true);
        }

        setError("");
        setLoading(false);
    }

    async function handleOutputGeneration(type) {
        if (!notes.trim()) {
            setError("Please enter some notes first");
            return;
        };
        setLastSubmittedNotes(notes);
        setIsStale(false);

        try {
            setError("");
            setLoading(true);

            const result = await get_output(notes, type);
            setOutputs(prev => ({
                ...prev,
                [type]: result
            }));

            setType(type)

        } catch (error) {
            
            setError(errorMessages[error.message] || "An unexpected error occurred. Please try again.");
            console.error("Error generating output:", error);

        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="box">
            <h2>Input Notes</h2>

            <textarea className="notes" placeholder="Paste your notes here" value={notes} onChange={(e) => handleNotesChange(e)}></textarea>

            <div className="controls">
                <ActionButton type="summary" fill="Generate Summary" onClickAction={handleOutputGeneration} disabled={!!outputs.summary && !isStale} />
                <ActionButton type="keypoints" fill="Key Points" onClickAction={handleOutputGeneration} disabled={!!outputs.keypoints && !isStale} />
                <ActionButton type="quiz" fill="Generate Quiz" onClickAction={handleOutputGeneration} disabled={!!outputs.quiz && !isStale} />

                <div className="explain-control">
                    <select className="level-select" onChange={(e) => handleLevelChange(e.target.value)}>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>

                    <ActionButton type={level} fill="Explain" onClickAction={handleOutputGeneration} disabled={explainDisabled && !isStale} />
                </div>
            </div>
        </div>
    )
}

export default InputBox