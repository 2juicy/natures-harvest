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

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="title">Add a new plant</h2>
      <div className="input-box">
        <span className="label">Name</span>
        <input
          name="name"
          placeholder="Enter plant name"
          type="text"
          ref={nameRef}
          required
        />
      </div>
      <div className="input-box">
        <span className="label">Type</span>
        <input
          name="type"
          placeholder="Enter plant type"
          type="text"
          ref={typeRef}
        />
      </div>
      <div className="modal-button-group">
        <button type="button" className="cancel" onClick={close}>
          Cancel
        </button>
        <div className="submit">
          <input type="submit" value="Add" />
        </div>
      </div>
    </form>
  );
});

export default AddPlantForm;
