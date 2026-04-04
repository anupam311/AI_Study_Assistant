import { useState } from "react"
import ActionButton from "./ActionButtons"
import { get_output } from "../services/aiService";

function InputBox({setType, setOutputs, setLoading, setError, outputs}) {
    
    const [notes, setNotes] = useState("");
    const [level, setLevel] = useState("beginner");

    const explainDisabled =
        outputs.beginner &&
        outputs.intermediate &&
        outputs.advanced;

    function handleLevelChange(value) {
        setLevel(value)
    }

    async function handleOutputGeneration(type) {
        if (!notes.trim()) {
            setError("Please enter some notes first");
            return;
        };

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
            
            switch (error.message) {
                case "RATE_LIMIT":
                    setError("Daily limit reached. Please try again tomorrow.");
                    break;

                case "SERVER_DOWN":
                    setError("Server is currently down. Please try again later.");
                    break;

                case "TIMEOUT":
                    setError("Request took too long. Please try again.");
                    break;

                case "NETWORK_ERROR":
                    setError("Network error. Please check your connection and try again.");
                    break;

                default:
                    setError("An unexpected error occurred. Please try again.");
            }

            console.error("Error generating output:", error);

        } finally {
            setLoading(false);
        }
    }


    function handleActionClick(type) {
        handleOutputGeneration(type);
    }

    return(
        <div className="box">
            <h2>Input Notes</h2>

            <textarea className="notes" placeholder="Paste your notes here" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

            <div className="controls">
                <ActionButton type="summary" fill="Generate Summary" onClickAction={handleActionClick} disabled={!!outputs.summary} />
                <ActionButton type="keypoints" fill="Key Points" onClickAction={handleActionClick} disabled={!!outputs.keypoints} />
                <ActionButton type="quiz" fill="Generate Quiz" onClickAction={handleActionClick} disabled={!!outputs.quiz} />

                <div className="explain-control">
                    <select className="level-select" onChange={(e) => handleLevelChange(e.target.value)}>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>

                    <ActionButton type={level} fill="Explain" onClickAction={handleActionClick} disabled={explainDisabled} />
                </div>
            </div>
        </div>
    )
}

export default InputBox