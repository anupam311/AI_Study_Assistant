function LoadingMessage({ hidden }) {

    if (hidden) {
        return null;
    }

    return (
        <div className="loading-message">
            Generating Response<span className="dots"></span>
        </div>
    );
}

export default LoadingMessage;