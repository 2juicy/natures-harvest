import "./Alert.scss";

export default function Alert({
  message,
  setError,
}: {
  message: string;
  setError: (arg: string) => void;
}) {
  return (
    <div className={`alert ${message ? "show showAlert" : "hide"}`}>
      <span className="msg">{message}</span>
      <div
        className="close-btn"
        onClick={() => {
          setError("");
        }}
      >
        <span className="x-btn">X</span>
      </div>
    </div>
  );
}
