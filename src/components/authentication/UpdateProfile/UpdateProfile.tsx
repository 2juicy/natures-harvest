import { useRef, useState } from "react";
import FlexContainer from "../FlexContainer/FlexContainer";
import { useAuth } from "../../../contexts/AuthContext";
import Alert from "../Alert/Alert";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: React.SyntheticEvent) {
    // e.preventDefault();
    // if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
    //   return setError("Passwords do not match!");
    // }
    // try {
    //   setError("");
    //   setLoading(true);
    //   await signup(emailRef.current?.value, passwordRef.current?.value);
    //   history.push("/");
    // } catch {
    //   setError("Failed to create an account!");
    // }
    // setLoading(false);
  }

  return (
    <FlexContainer>
      <div className="container">
        <h3 className="title">Update Profile</h3>
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
              defaultValue={currentUser.email}
            />
          </div>

          <div className="input-box">
            <span className="label">Password</span>
            <input
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
              type="password"
              required
            />
          </div>

          <div className="input-box">
            <span className="label">Confirm password</span>
            <input
              ref={confirmPasswordRef}
              placeholder="Confirm change password"
              type="password"
              required
            />
          </div>

          <div className="submit">
            <input disabled={loading} type="submit" value="Update Profile" />
          </div>

          <div className="go-login">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </FlexContainer>
  );
}
