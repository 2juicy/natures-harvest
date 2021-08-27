import "./Dashboard.scss";
import { useAuth } from "../../../contexts/AuthContext";
import Navbar from "../Navbar/Navbar";
import AddPlant from "../AddPlant/AddPlant";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="dashboard-flex-container">
      <Navbar />

      <h1 className="title">{currentUser?.email}'s Dashboard</h1>

      <div className="dashboard container">
        No content here yet
        <AddPlant />
      </div>
    </div>
  );
}
