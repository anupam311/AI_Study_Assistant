function LoadingMessage({ loading }) {

    if (!loading) return null;

    return (
        <div className="loading-message">
            Generating Response<span className="dots"></span>
        </div>
    );
}

export default LoadingMessage;