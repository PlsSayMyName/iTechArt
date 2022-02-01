import ModalLogin from "./ModalLogin";
import ModalReg from "./ModalReg";

function ModalManager({ closeFn = () => null, modal = "" }) {
  return (
    <>
      <ModalLogin closeFn={closeFn} open={modal === "modal-sign"} />
      <ModalReg closeFn={closeFn} open={modal === "modal-reg"} />
    </>
  );
}

export default ModalManager;
