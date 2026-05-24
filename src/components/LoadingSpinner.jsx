export default function LoadingSpinner({ message = "Analyzing resume..." }) {
  return (
    <div className="loading-shell">
      <div className="loading-spinner" />
      <p>{message}</p>
    </div>
  )
}