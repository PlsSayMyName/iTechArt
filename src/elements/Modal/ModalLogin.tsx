/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaTimes } from "react-icons/fa";
import Signin from "@/components/users/Login/LoginForm";
import Modal from "./Modal";

// const validationSchema = Yup.object({
//   login: Yup.string().required("Enter Login").min(2),
//   passwordLogin: Yup.string().required("Password must contain at least 8 characters").min(8),
// });

function ModalLogin({ closeFn = () => null, open = false }) {
  // const { handleSubmit, handleChange, values, errors } = useFormik({
  //   initialValues: {
  //     login: "",
  //     passwordLogin: "",
  //   },
  //   validationSchema,
  //   onSubmit(values) {
  //     console.log(values);
  //   },
  // });

  return (
    <Modal open={open}>
      <div className="modal">
        <div className="modal-body">
          <h2 className="title">Login Form</h2>
          <p className="subtitle">Login here Using Login & Password</p>
          <Signin />
          <button type="button" className="close" onClick={closeFn}>
            <FaTimes />
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalLogin;
