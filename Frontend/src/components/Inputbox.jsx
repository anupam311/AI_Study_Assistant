import { useState } from "react"
import ActionButton from "./ActionButtons"
import { get_output } from "../services/aiService";

function InputBox(){
    
    const [notes, setNotes] = useState("");
    const [level, setLevel] = useState("beginner");
    const [output, setOutput] = useState("");

    function handleLevelChange(value) {
        setLevel(value)
    }

    function handleOutputGeneration(type) {
        if (!notes.trim()) {
            alert("Please enter some notes first");
            return;
        }

        setOutput(get_output(notes, type));
            
    }


    function handleActionClick(type) {
        handleOutputGeneration(type);
    }

    return(
        <div className="box">
            <h2>Input Notes</h2>

            <textarea className="notes" placeholder="Paste your notes here" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

            <div className="controls">
                <ActionButton type="summary" fill="Generate Summary" onClickAction={handleActionClick} />
                <ActionButton type="keypoints" fill="Key Points" onClickAction={handleActionClick} />
                <ActionButton type="quiz" fill="Generate Quiz" onClickAction={handleActionClick} />

                <div className="explain-control">
                    <select className="level-select" onChange={(e) => handleLevelChange(e.target.value)}>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>

                    <ActionButton type={level} fill="Explain" onClickAction={handleActionClick} />
                </div>
            </div>
        </div>
    )
}

export default InputBox