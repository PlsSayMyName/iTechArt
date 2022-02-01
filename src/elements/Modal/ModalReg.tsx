/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaTimes } from "react-icons/fa";
import Modal from "./Modal";

function ModalReg({ closeFn = () => null, open = false }) {
  return (
    <Modal open={open}>
      <div className="modal">
        <div className="modal-body">
          <p>ModalReg Window</p>
          <button type="button" className="close" onClick={closeFn}>
            <FaTimes />
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalReg;
