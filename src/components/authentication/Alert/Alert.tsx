import "./Alert.scss";

export default function Alert({
  variant,
  message,
  setMessage,
}: {
  variant: string;
  message: string;
  setMessage: (arg: string) => void;
}) {
  return (
    <div className={`${variant} ${message ? "show showAlert" : "hide"}`}>
      <span className="msg">{message}</span>
      <div className="close-btn" onClick={() => setMessage("")}>
        <span className="x-btn">X</span>
      </div>
    </div>
  );
}
