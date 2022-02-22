/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import InputText from "@/elements/InputText";

// eslint-disable-next-line require-await
async function loginUser(credentials: unknown) {
  return fetch("https://www.mecallapi.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export default function Signin() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });
    if ("accessToken" in response) {
      console.log("Success", response.accessToken);
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("user", JSON.stringify(response.user));
      window.location.href = "/profile";
    } else {
      console.log("Failed", response.message);
    }
  };
  return (
    <form method="POST" name="login-form" noValidate onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="login">
          Login
          <InputText
            type="text"
            name="login"
            id="login"
            // value={values.login}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        {/* {errors.login ? errors.login : null} */}
      </div>
      <div className="input">
        <label htmlFor="passwordLogin">
          Password
          <InputText
            type="password"
            name="passwordLogin"
            id="passwordLogin"
            // value={values.passwordLogin}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {/* {errors.passwordLogin ? errors.passwordLogin : null} */}
      </div>
      <InputText type="submit" name="submitLogin" id="submit-login" value="Login" onClick={handleSubmit} />
    </form>
  );
}
