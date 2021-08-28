import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { database } from "../../../firebase";
import Navbar from "../Navbar/Navbar";
import AddPlant from "../AddPlant/AddPlant";
import "./Table.scss";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [plants, setPlants] = useState<any[]>([]);

  useEffect(() => {
    return database.plants
      .where("userId", "==", currentUser.uid)
      .orderBy("createdAt")
      .onSnapshot(snapshot => {
        setPlants(snapshot.docs.map(database.formatDoc));
        console.log(plants[0].lastUpdated);
      });
  }, [currentUser]);

  return (
    <div className="dashboard-flex-container">
      <Navbar />
      <h1 className="title">{currentUser?.email}'s plants</h1>
      <div className="dashboard container">
        <AddPlant />
        {plants ? (
          <table className="plants-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {plants.map(plant => (
                <tr key={plant.id}>
                  <td>{plant.name}</td>
                  <td>{plant.type}</td>
                  <td>DATE NEEDS FIX</td>
                  <td>
                    <button>Update</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4>No plants yet! Add one with the + button.</h4>
        )}
      </div>
    </div>
  );
}
