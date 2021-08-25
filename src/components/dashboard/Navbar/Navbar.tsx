import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/favicon.png"} alt="Logo" />
          <a href="#/">Nature's Harvest</a>
        </div>

        <div className="profile-details">
          <img src={process.env.PUBLIC_URL + "/profile.png"} alt="User" />
          <span className="profile-name">Johnny C.</span>
          <i className="bx bx-chevron-down arrow"></i>
        </div>
      </div>
    </nav>
  );
}
