import { useState } from "react";

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <main>
      <section className="profile wrapper">
        <h1 className="title">Profile page</h1>
        <h2 className="title">User info</h2>
        <p>
          Full name: {user.fname} {user.lname}
        </p>
        <div>
          Avatar: <img src={user.avatar} alt={user.fname} />
        </div>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </section>
    </main>
  );
}
