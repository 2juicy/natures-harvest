import "./Dashboard.scss";
import { useAuth } from "../../../contexts/AuthContext";
import Navbar from "../Navbar/Navbar";
import RangeSlider from "../RangeSlider/RangeSlider";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="dashboard-flex-container">
      <Navbar />
      <h1 className="title">{currentUser?.email}'s dashboard</h1>
      <div className="dashboard container">
        <RangeSlider />
      </div>
    </div>
  );
}
