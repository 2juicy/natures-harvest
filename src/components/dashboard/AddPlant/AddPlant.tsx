import React, { useState } from "react";
import "./AddPlant.scss";
import { database } from "../../../firebase";
import Modal from "../Modal/Modal";

export default function AddPlant() {
  const [modal, setModal] = useState(false);
  const [plant, setPlant] = useState({
    name: "",
    type: "",
  });

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
    database.plants.add(plant);
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
        <Modal
          close={handleClose}
          handleForm={handleForm}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}
