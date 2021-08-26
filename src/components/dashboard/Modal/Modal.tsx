import "./Modal.scss";

export default function Modal({ close }: { close: () => void }) {
  return (
    <div className="modal">
      <form>
        <h2 className="title">Add a new plant</h2>
        <div className="input-box">
          <span className="label">Name</span>
          <input placeholder="Enter plant name" type="text" required />
        </div>
        <div className="input-box">
          <span className="label">Type</span>
          <input placeholder="Enter plant type" type="text" />
        </div>
        <div className="modal-button-group">
          <button className="cancel" onClick={close}>
            Cancel
          </button>
          <div className="submit">
            <input onClick={close} type="submit" value="Add" />
          </div>
        </div>
      </form>
    </div>
  );
}
