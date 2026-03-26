import { useState } from "react"
import ActionButton from "./ActionButtons"

function InputBox(){

    const [level, setlevel] = useState("beginner");

    function handleLevelChange(value) {
        setlevel(value)
    }

    return(
        <div className="box">
            <h2>Input Notes</h2>

            <textarea className="notes" placeholder="Paste your notes here"></textarea>

            <div className="controls">
                <ActionButton id="summary" fill="Generate Summary" />
                <ActionButton id="keypoints" fill="Key Points" />
                <ActionButton id="quiz" fill="Generate Quiz" />

                <select className="level-select" onChange={(e) => handleLevelChange(e.target.value)}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>

                <ActionButton id={level} fill="Explain" />
            </div>
        </div>
    )
}

export default InputBox