import ReactDOM from "react-dom";
import "./Modal.scss";

const modalRootEl = document.getElementById("modal-root");

function Modal({ children, open = false }) {
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRootEl);
}
export default Modal;
