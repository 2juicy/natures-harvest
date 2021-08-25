import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <a className="title" href="#/">
            Nature's Harvest
          </a>
        </div>

        <div className="profile-details">
          <img src={process.env.PUBLIC_URL + "/favicon.png"} alt="User" />
          <span className="user-name">Johnny C.</span>
          <i className="bx bx-chevron-down"></i>
        </div>
      </div>
    </nav>
  );
}
