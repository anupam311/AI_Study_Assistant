import InputBox from "./components/input/Inputbox"
import OutputBox from "./components/output/Outputbox";
import LoadingMessage from "./components/feedback/LoadingMessage";
import ErrorToast from "./components/feedback/ErrorToast";
import { useState } from "react";

function App(){

    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
            <ErrorToast error={error} setError={setError} />
            <LoadingMessage loading={loading} />
            <InputBox setType={setType} setOutputs={setOutputs} setLoading={setLoading} setError={setError} outputs={outputs} />
            <OutputBox type={type} outputs={outputs} />
        </div>
    );
}

export default App
