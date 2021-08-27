import "./Dashboard.scss";
import { useAuth } from "../../../contexts/AuthContext";
import { database } from "../../../firebase";
import Navbar from "../Navbar/Navbar";
import AddPlant from "../AddPlant/AddPlant";

import { useEffect, useState } from "react";
import Plant from "../Plant/Plant";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [plants, setPlants] = useState<any[]>([]);

  useEffect(() => {
    return database.plants
      .where("userId", "==", currentUser.uid)
      .orderBy("createdAt")
      .onSnapshot(snapshot => {
        setPlants(snapshot.docs.map(database.formatDoc));
      });
  }, [currentUser]);

  return (
    <div className="dashboard-flex-container">
      <Navbar />
      <h1 className="title">{currentUser?.email}'s Dashboard</h1>
      <div className="dashboard container">
        <AddPlant />
        {plants.map(plant => (
          <Plant key={plant.id} plant={plant.name} type={plant.type} />
        ))}
      </div>
    </div>
  );
}
