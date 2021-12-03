import React from "react";

import Section from "./Section/Section";
import UserNav from "./UserNav/UserNav";

function User() {
  return (
    <div
      className="page-bg img-fluid"
      style={{ height: "100vh", width: "100%" }}
    >
      <UserNav />
      <Section />
    </div>
  );
}

export default User;
