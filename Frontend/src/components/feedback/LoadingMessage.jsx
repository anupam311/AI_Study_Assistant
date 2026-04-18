function LoadingMessage({ loading, slowLoading }) {
  if (!loading) return null;

  return (
    <div className="loading-message">
      <div>
        Generating Response<span className="dots"></span>
      </div>

      {slowLoading && (
        <div className="slow-loading-message">
          Still working... this may take a bit longer.
        </div>
      )}
    </div>
  );
}

export default LoadingMessage;