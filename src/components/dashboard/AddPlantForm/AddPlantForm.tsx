import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
} from "react";

interface Props {
  close: () => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

const AddPlantForm = forwardRef(({ close, handleSubmit }: Props, ref) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  useImperativeHandle(ref, () => ({
    get name() {
      return nameRef.current?.value;
    },
    get type() {
      return typeRef.current?.value;
    },
  }));

  function nameKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") typeRef.current?.focus();
  }

  function typeKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") submitRef.current?.focus();
  }

  return (
    <div className="add-plant-form">
      <h2 className="title">Add a new plant</h2>
      <div className="input-box">
        <span className="label">Name</span>
        <input
          name="name"
          placeholder="Enter plant name"
          type="text"
          ref={nameRef}
          onKeyDown={nameKeyDown}
          required
        />
      </div>
      <div className="input-box">
        <span className="label">Type</span>
        <input
          name="type"
          placeholder="Enter plant type"
          type="text"
          onKeyDown={typeKeyDown}
          ref={typeRef}
        />
      </div>
      <div className="modal-button-group">
        <button type="button" className="cancel" onClick={close}>
          Cancel
        </button>
        <button
          type="button"
          className="submit"
          ref={submitRef}
          onClick={handleSubmit}
          onKeyDown={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
});

export default AddPlantForm;
