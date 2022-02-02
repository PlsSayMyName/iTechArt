/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormik } from "formik";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import InputText from "../InputText";
import Modal from "./Modal";

const validationSchema = Yup.object({
  login: Yup.string().required("Enter Login").min(2),
  passwordLogin: Yup.string().required("Password must contain at least 8 characters").min(8),
});

function ModalLogin({ closeFn = () => null, open = false }) {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      login: "",
      passwordLogin: "",
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
    },
  });
  return (
    <Modal open={open}>
      <div className="modal">
        <div className="modal-body">
          <h2 className="title">Login Form</h2>
          <p className="subtitle">Login here Using Login & Password</p>
          <form action="post" name="login-form" onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="login">
                Login
                <InputText type="text" name="login" id="login" value={values.login} onChange={handleChange} />
              </label>
              {errors.login ? errors.login : null}
            </div>
            <div className="input">
              <label htmlFor="passwordLogin">
                Password
                <InputText
                  type="password"
                  name="passwordLogin"
                  id="passwordLogin"
                  value={values.passwordLogin}
                  onChange={handleChange}
                />
              </label>
              {errors.passwordLogin ? errors.passwordLogin : null}
            </div>
            <InputText type="submit" name="submitLogin" id="submit-login" value="Login" />
          </form>
          <button type="button" className="close" onClick={closeFn}>
            <FaTimes />
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalLogin;
