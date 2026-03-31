import InputBox from "./components/Inputbox"
import OutputBox from "./components/Outputbox";
import LoadingMessage from "./components/LoadingMessage";
import { useState } from "react";

function App(){

    const [type, setType] = useState("");
    const [hidden, setHidden] = useState(true);

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
            <LoadingMessage hidden={hidden} />
            <InputBox setType={setType} setOutputs={setOutputs} setHidden={setHidden} />
            <OutputBox type={type} outputs={outputs} />
        </div>
    );
}

export default App
