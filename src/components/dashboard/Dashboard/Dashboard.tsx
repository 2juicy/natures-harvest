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
      <h1 className="title">Dashboard</h1>
      <p>Email: {currentUser?.email}</p>
      {error && <Alert message={error} setError={setError} />}

      <button className="logout" onClick={handleSignout}>
        Log Out
      </button>
    </FlexContainer>
  );
}
