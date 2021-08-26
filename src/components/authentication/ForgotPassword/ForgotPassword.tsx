import { useRef, useState } from "react";
import FlexContainer from "../FlexContainer/FlexContainer";
import { useAuth } from "../../../contexts/AuthContext";
import Alert from "../Alert/Alert";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef<HTMLInputElement>(null);
  const { forgotPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    try {
      setError("");
      setMessage("");
      setLoading(true);
      await forgotPassword(emailRef.current?.value);
      setMessage("Check your email for instructions.");
    } catch {
      setError("Failed to reset password!");
    }
    setLoading(false);
  }

  return (
    <FlexContainer>
      <div className="container">
        <h3 className="title">Password Recovery</h3>
        {error && (
          <Alert variant="alert" message={error} setMessage={setError} />
        )}
        {message && (
          <Alert variant="warning" message={message} setMessage={setMessage} />
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="label">Email</span>
            <input
              ref={emailRef}
              placeholder="Enter your Email"
              type="email"
              required
            />
          </div>

          <div className="submit">
            <input disabled={loading} type="submit" value="Reset Password" />
          </div>

          <div className="cancel">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
      <Link to="/signin">Sign In</Link>
    </FlexContainer>
  );
}
