import "./Alert.scss";

export default function Alert({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (arg: string) => void;
}) {
  return (
    <div className={`alert ${message ? "show showAlert" : "hide"}`}>
      <span className="msg">{message}</span>
      <div className="close-btn" onClick={() => setMessage("")}>
        <span className="x-btn">X</span>
      </div>
    </div>
  );
}
