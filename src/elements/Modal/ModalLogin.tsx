/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormik } from "formik";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import InputText from "../InputText";
import Modal from "./Modal";

const validationSchema = Yup.object({
  login: Yup.string().required("Enter Login").min(2),
  passwordLogin: Yup.string().required("Password must contain at least 8 characters").min(8),
});

function ModalLogin({ closeFn = () => null, open = false }) {
  const { handleSubmit, values, errors } = useFormik({
    initialValues: {
      login: "",
      passwordLogin: "",
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
    },
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const user = { username, password };

  //   const response = await axios.post("https://fakestoreapi.com/auth/login", user);
  //   setUser(response.data);
  //   localStorage.setItem("user", response.data);
  //   console.log(response.data);
  // };

  // if (user) {
  //   return <div>{user.name} is logged in</div>;
  // }
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
                <InputText
                  type="text"
                  name="login"
                  id="login"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                />
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
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
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
