import InputBox from "./components/Inputbox"
import OutputBox from "./components/Outputbox";
import LoadingMessage from "./components/LoadingMessage";
import { useState } from "react";
import ErrorToast from "./components/ErrorToast";

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
