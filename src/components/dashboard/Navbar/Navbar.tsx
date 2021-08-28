import "./Navbar.scss";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Alert from "../../authentication/Alert/Alert";
import { NavLink, useHistory } from "react-router-dom";

export default function Navbar() {
  const [error, setError] = useState("");
  const { signout } = useAuth();
  const history = useHistory();

  async function handleSignout() {
    setError("");
    try {
      await signout();
      history.replace("/signin");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <nav>
      {error && <Alert variant="alert" message={error} setMessage={setError} />}
      <div className="navbar">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/favicon.png"} alt="Logo" />
          <a href="#/">Nature's Harvest</a>
        </div>

        <div className="profile-details">
          <img src={process.env.PUBLIC_URL + "/profile.png"} alt="User" />
          <span className="profile-name">User12345</span>
          <i className="bx bx-chevron-down arrow"></i>
          <ul className="sub-menu">
            <li>
              <NavLink exact to="/" activeStyle={{ display: "none" }}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/plants" activeStyle={{ display: "none" }}>
                Plants
              </NavLink>
            </li>

            <li>
              <NavLink to="/update-profile">Update Profile</NavLink>
            </li>
            <li>
              <a href="#/" onClick={handleSignout}>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
