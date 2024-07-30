export default function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div role="alert">
        <p>Oops, an error occurred in the command center:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }