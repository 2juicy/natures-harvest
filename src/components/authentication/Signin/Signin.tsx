import { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Alert from "../Alert/Alert";
import { Link, useHistory } from "react-router-dom";

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current?.value, passwordRef.current?.value);
      history.push("/");
    } catch {
      setError("Failed to sign in!");
      setLoading(false);
    }
  }

  return (
    <div className="flex-container">
      <div className="container">
        <h3 className="title">Sign In</h3>
        {error && (
          <Alert variant="alert" message={error} setMessage={setError} />
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

          <div className="input-box">
            <span className="label">Password</span>
            <input
              ref={passwordRef}
              placeholder="Enter your password"
              type="password"
              required
            />
          </div>

          <div className="submit">
            <input disabled={loading} type="submit" value="Sign In" />
          </div>

          <div className="cancel">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
  );
}
