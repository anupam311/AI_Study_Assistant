import InputBox from "./components/Inputbox"
import OutputBox from "./components/Outputbox";
import { useState } from "react";

function App(){

    const [type, setType] = useState("");

    const [outputs, setOutputs] = useState({
        summary:"",
        keypoints:"",
        quiz:"",
        beginner:"",
        intermediate:"",
        advanced:"",
    });

    return(
        <div className="container">
            <InputBox setType={setType} setOutputs={setOutputs} />
            <OutputBox type={type} outputs={outputs} />
        </div>
    );
}

export default App
