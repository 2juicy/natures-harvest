import "./Modal.scss";

export default function Modal({ close }: { close: () => void }) {
  return (
    <div className="modal">
      <h4>This is a test modal</h4>
      <div className="modal-button-group">
        <button onClick={close}>Cancel</button>
        <button onClick={close}>Add</button>
      </div>
    </div>
  );
}
