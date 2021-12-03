import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../server";

function LogPopup() {
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currUser) => {
    setUser(currUser);
    navigate("/user");
  });

  const login = () => {
    try {
      const user = signInWithEmailAndPassword(auth, logEmail, logPass);
      console.log(user);
    } catch (err) {
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    if (user) navigate("/user");
  }, [user]);

  return (
    <div>
      <h1>Logare</h1>
      <br />
      <br />

      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ width: "100%" }}
      >
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">Email:</label>
            <input
              type="mail"
              className="form-control"
              placeholder="student@stud.upb.ro"
              value={logEmail}
              onChange={(e) => setLogEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Parola:</label>
            <input
              type="password"
              className="form-control"
              value={logPass}
              onChange={(e) => setLogPass(e.target.value)}
            />
          </div>

          <br />
          <p>
            Nu ai cont?
            <a href="/" className="text-light">
              Înregistrează-te
            </a>
          </p>
          <br />
          <button className="btn-choose" onClick={user ? login : signOut}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogPopup;
