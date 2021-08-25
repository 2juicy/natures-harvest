import { useRef, useState } from "react";
import FlexContainer from "../FlexContainer/FlexContainer";
import { useAuth } from "../../../contexts/AuthContext";
import Alert from "../Alert/Alert";
import { Link, useHistory } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef<HTMLInputElement>(null);
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      //   await signin(emailRef.current?.value, passwordRef.current?.value);
      history.push("/");
    } catch {
      setError("Failed to sign in!");
    }
    setLoading(false);
  }

  return (
    <FlexContainer>
      <div className="container">
        <h3 className="title">Password Recovery</h3>
        {currentUser?.email}
        {error && <Alert message={error} setError={setError} />}
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

          <div className="go-login">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
      <Link to="/signin">Sign In</Link>
    </FlexContainer>
  );
}
