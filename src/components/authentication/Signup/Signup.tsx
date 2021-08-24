import { useRef } from "react";
import "./Signup.scss";
import FlexContainer from "../FlexContainer/FlexContainer";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  return (
    <FlexContainer>
      <div className="container">
        <h3 className="title">Sign Up</h3>
        <form action="#">
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

          <div className="button">
            <input type="submit" value="Sign Up" />
          </div>

          <div className="go-login">
            Already have an account? <a href="#/">Log In</a>
          </div>
        </form>
      </div>
    </FlexContainer>
  );
}
