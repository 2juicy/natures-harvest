import "./Alert.scss";

export default function Alert({
  variant = "alert",
  message,
  setMessage,
}: {
  variant?: "alert" | "warning";
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
