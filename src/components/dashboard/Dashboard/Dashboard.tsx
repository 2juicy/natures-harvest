import "./Dashboard.scss";
import { useAuth } from "../../../contexts/AuthContext";
import { database } from "../../../firebase";
import Navbar from "../Navbar/Navbar";
import AddPlant from "../AddPlant/AddPlant";
import Plants from "../Plants/Plants";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    return database.plants
      .where("userId", "==", currentUser.uid)
      .orderBy("createdAt")
      .onSnapshot(snapshot => {
        console.log(snapshot.docs.map(database.formatDoc));
      });
  }, [currentUser]);

  return (
    <div className="dashboard-flex-container">
      <Navbar />
      <h1 className="title">{currentUser?.email}'s Dashboard</h1>
      <div className="dashboard container">
        <AddPlant />
        <Plants />
      </div>
    </div>
  );
}
