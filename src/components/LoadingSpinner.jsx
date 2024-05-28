const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
