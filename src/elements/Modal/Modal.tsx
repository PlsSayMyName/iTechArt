/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Modal.scss";

export default function Modal({ active, setActive, children }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal-body active" : "modal-body"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
