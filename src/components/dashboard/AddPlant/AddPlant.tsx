import React, { useState } from "react";
import "./AddPlant.scss";
import { database } from "../../../firebase";
import Modal from "../Modal/Modal";
import { useAuth } from "../../../contexts/AuthContext";
import AddPlantForm from "../AddPlantForm/AddPlantForm";

export default function AddPlant() {
  const [modal, setModal] = useState(false);
  const [plant, setPlant] = useState({
    name: "",
    type: "",
  });
  const { currentUser } = useAuth();

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
  }

  function handleClose() {
    setPlant({
      name: "",
      type: "",
    });
    setModal(false);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    database.plants.add({
      ...plant,
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
    });
    setPlant({
      name: "",
      type: "",
    });
    setModal(false);
  }

  return (
    <>
      <button className="add-plant" onClick={() => setModal(true)}>
        Add Plant
      </button>
      {modal && (
        <Modal>
          <AddPlantForm
            close={handleClose}
            handleForm={handleForm}
            handleSubmit={handleSubmit}
          />
        </Modal>
      )}
    </>
  );
}
