import InputBox from "./components/input/Inputbox"
import OutputBox from "./components/output/Outputbox";
import LoadingMessage from "./components/feedback/LoadingMessage";
import ErrorToast from "./components/feedback/ErrorToast";
import { useState, useEffect } from "react";

function App(){

    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);
    const [slowLoading, setSlowLoading] = useState(false);
    const [error, setError] = useState("");
    const [isStale, setIsStale] = useState(false);

    const [outputs, setOutputs] = useState({
        summary:"",
        keypoints:"",
        quiz:"",
        beginner:"",
        intermediate:"",
        advanced:"",
    });

    useEffect(() => {
        let timer;

        if (loading) {
            timer = setTimeout(() => {
                setSlowLoading(true);
            }, 6000);
        } else {
            setSlowLoading(false);
        }

        return () => clearTimeout(timer);
    }, [loading]);

    return(
        <div className="container">
            <ErrorToast error={error} setError={setError} />
            <LoadingMessage loading={loading} slowLoading={slowLoading} />
            <InputBox setType={setType} setOutputs={setOutputs} setLoading={setLoading} setError={setError} setIsStale={setIsStale} isStale={isStale} outputs={outputs} />
            <OutputBox type={type} outputs={outputs} isStale={isStale} />
        </div>
    );
}

export default App
