/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormik } from "formik";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import InputText from "../InputText";
import Modal from "./Modal";

const validationSchema = Yup.object({
  loginReg: Yup.string().required("Enter Login").min(2),
  passwordReg: Yup.string().min(8).required("Password must contain at least 8 characters"),
  repeatPasswordReg: Yup.string()
    .required()
    .oneOf([Yup.ref("passwordReg"), null], "Password must match"),
});

function ModalReg({ closeFn = () => null, open = false }) {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      loginReg: "",
      passwordReg: "",
      repeatPasswordReg: "",
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
          <h2 className="title">Registration Form</h2>
          <p className="subtitle">Register here Creating Login & Password</p>
          <form action="post" name="reg-form" onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="loginReg">
                Login
                <InputText type="text" name="loginReg" id="loginReg" value={values.loginReg} onChange={handleChange} />
              </label>
              {errors.loginReg ? errors.loginReg : null}
            </div>
            <div className="input">
              <label htmlFor="passwordReg">
                Password
                <InputText
                  type="password"
                  name="passwordReg"
                  id="passwordReg"
                  value={values.passwordReg}
                  onChange={handleChange}
                />
              </label>
              {errors.passwordReg ? errors.passwordReg : null}
            </div>
            <div className="input">
              <label htmlFor="repeatPasswordReg">
                Repeat password
                <InputText
                  type="password"
                  name="repeatPasswordReg"
                  id="repeatPasswordReg"
                  value={values.repeatPasswordReg}
                  onChange={handleChange}
                />
              </label>
              {errors.repeatPasswordReg ? errors.repeatPasswordReg : null}
            </div>
            <InputText type="submit" name="submitReg" id="submitReg" value="Register" />
          </form>
          <button type="button" className="close" onClick={closeFn}>
            <FaTimes />
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalReg;
