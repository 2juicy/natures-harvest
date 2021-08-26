import "./Dashboard.scss";
import { useAuth } from "../../../contexts/AuthContext";
import FlexContainer from "../../authentication/FlexContainer/FlexContainer";
import Navbar from "../Navbar/Navbar";
import AddPlant from "../AddPlant/AddPlant";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <FlexContainer>
      <div className="dashboard container">
        <Navbar />
        <h1 className="title">Dashboard</h1>
        <h4>Welcome to Nature's Harvest!</h4>
        <p>Email: {currentUser?.email}</p>
        <AddPlant />
      </div>
    </FlexContainer>
  );
}
