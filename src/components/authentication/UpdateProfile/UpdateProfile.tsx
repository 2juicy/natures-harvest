import React, { useEffect, useRef, useState } from "react";
import useToggle from "../../../hooks/useToggle";
import "./UpdateProfile.scss";
import { useAuth } from "../../../contexts/AuthContext";
import Alert from "../Alert/Alert";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useToggle(false);
  const history = useHistory();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  function emailKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") passwordRef.current?.focus();
  }

  function passwordKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") confirmPasswordRef.current?.focus();
  }

  function confirmPasswordKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") submitRef.current?.focus();
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      return setError("Passwords do not match!");
    }

    const promises = [];
    if (emailRef.current?.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current?.value));
    }
    if (passwordRef.current?.value) {
      promises.push(updatePassword(passwordRef.current?.value));
    }

    Promise.all(promises)
      .then(() => history.push("/"))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
    setLoading(false);
  }

  return (
    <div className="flex-container">
      <div className="container">
        <h3 className="title">Update Profile</h3>
        {error && (
          <Alert variant="alert" message={error} setMessage={setError} />
        )}

        <div className="input-box">
          <span className="label">Email</span>
          <input
            ref={emailRef}
            placeholder="Enter your Email"
            type="email"
            onKeyDown={emailKeyDown}
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
            onKeyDown={passwordKeyDown}
          />
        </div>

        <div className="input-box">
          <span className="label">Confirm password</span>
          <input
            ref={confirmPasswordRef}
            placeholder="Confirm change password"
            type="password"
            onKeyDown={confirmPasswordKeyDown}
          />
        </div>

        <button
          className="update"
          disabled={loading}
          type="button"
          ref={submitRef}
          onKeyDown={handleSubmit}
          onClick={handleSubmit}
        >
          Update Profile
        </button>

        <div className="cancel">
          <Link to="/">Cancel</Link>
        </div>
      </div>
    </div>
  );
}
