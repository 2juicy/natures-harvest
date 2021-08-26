import { useState } from "react";
import Modal from "../Modal/Modal";
import "./AddPlant.scss";

export default function AddPlant() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <button className="add-plant" onClick={() => setModal(true)}>
        Add Plant
      </button>
      {modal && <Modal close={() => setModal(false)} />}
    </>
  );
}
