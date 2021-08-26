import "./Modal.scss";

interface Props {
  close: () => void;
  handleForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

export default function Modal({ close, handleForm, handleSubmit }: Props) {
  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2 className="title">Add a new plant</h2>
        <div className="input-box">
          <span className="label">Name</span>
          <input
            name="name"
            placeholder="Enter plant name"
            type="text"
            onChange={handleForm}
            required
          />
        </div>
        <div className="input-box">
          <span className="label">Type</span>
          <input
            name="type"
            placeholder="Enter plant type"
            type="text"
            onChange={handleForm}
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
    </div>
  );
}
