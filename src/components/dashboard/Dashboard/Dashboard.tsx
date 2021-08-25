import "./Dashboard.scss";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Alert from "../../authentication/Alert/Alert";
import FlexContainer from "../../authentication/FlexContainer/FlexContainer";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, signout } = useAuth();
  const history = useHistory();

  async function handleSignout() {
    setError("");
    try {
      await signout();
      history.push("/signin");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <FlexContainer>
      <div className="dashboard container">
        <h1 className="title">Dashboard</h1>
        <p>Email: {currentUser?.email}</p>
        {error && (
          <Alert variant="alert" message={error} setMessage={setError} />
        )}

        <button className="logout" onClick={handleSignout}>
          Log Out
        </button>
      </div>
      <Link to="/update-profile">Update Profile</Link>
    </FlexContainer>
  );
}
