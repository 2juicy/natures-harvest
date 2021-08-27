import { useRef, useState } from "react";
import "./Signup.scss";
import { useAuth } from "../../../contexts/AuthContext";
import Alert from "../Alert/Alert";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current?.value, passwordRef.current?.value);
      history.push("/");
    } catch {
      setError("Failed to create an account!");
      setLoading(false);
    }
  }

  return (
    <div className="flex-container">
      <div className="container">
        <h3 className="title">Sign Up</h3>
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

          <div className="input-box">
            <span className="label">Confirm password</span>
            <input
              ref={confirmPasswordRef}
              placeholder="Confirm password"
              type="password"
              required
            />
          </div>

          <div className="submit">
            <input disabled={loading} type="submit" value="Sign Up" />
          </div>

          <div className="cancel">
            Already have an account? <Link to="/signin">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
