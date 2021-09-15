import React, { useRef, useState } from "react";
import "./AddPlant.scss";
import { database } from "../../../firebase";
import Modal from "../Modal/Modal";
import { useAuth } from "../../../contexts/AuthContext";
import AddPlantForm from "../AddPlantForm/AddPlantForm";

export default function AddPlant() {
  const [modal, setModal] = useState(false);
  const plantRef = useRef<HTMLInputElement>(null);
  const { currentUser } = useAuth();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    database.plants.add({
      name: plantRef.current?.name,
      type: plantRef.current?.type,
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
      lastUpdated: database.getCurrentTimestamp(),
    });
    setModal(false);
  }

  // database.plants.document(plant.id).collection("status");
  return (
    <>
      <button className="add-plant" onClick={() => setModal(true)}>
        +
      </button>
      {modal && (
        <Modal>
          <AddPlantForm
            close={() => setModal(false)}
            handleSubmit={handleSubmit}
            ref={plantRef}
          />
        </Modal>
      )}
    </>
  );
}
