import { useEffect, useState } from "react";

function ErrorToast({ error, setError }) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!error) return;

        const showTimer = setTimeout(() => {
            setVisible(true);
        }, 10);

        const fadeOutTimer = setTimeout(() => {
            setVisible(false); // start fade out
        }, 2500); // start fade before removal

        const removeTimer = setTimeout(() => {
            setError(""); // remove completely
        }, 3000);

        return () => {
            clearInterval(showTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(removeTimer);
        };
    }, [error, setError]);

    if (!error) return null;

    return (
        <div className={`toast ${visible ? "show" : "hide"}`}>
            ⚠️ {error}
        </div>
    );
}

export default ErrorToast;