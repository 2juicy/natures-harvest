import { useRef } from "react";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container">
      <div className="title">Sign Up</div>
      <div className="form">
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
      </div>
    </div>
  );
}
