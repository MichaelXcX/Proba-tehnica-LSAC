import React, { useState, useEffect } from "react";

import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { db, auth } from "../server";
import { Alert } from "react-bootstrap";

function RegPopup() {
  const [regFName, setRegFName] = useState("");
  const [regLName, setRegLName] = useState("");

  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regConfPass, setRegConfPass] = useState("");
  const [active, setActive] = useState(false);

  const [user, setUser] = useState({});
  const usersRef = collection(db, "Users");
  const opiniiRef = collection(db, "Opinii");
  opiniiRef.forEach((doc) => {
    console.log(...doc.data());
  });

  onAuthStateChanged(auth, (currUser) => {
    setUser(currUser);
  });

  const createUser = () => {
    try {
      const usr = createUserWithEmailAndPassword(auth, regEmail, regPass);
      const docRef = addDoc(usersRef, {
        FirstName: regFName,
        LastName: regLName,
        Email: regEmail,
        Password: regPass,
      });
      setUser(usr);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef);
      console.log(user);
      console.log(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getUsers();
  }, [usersRef, user]);

  const handleConfirm = (event) => {
    if (regConfPass === regPass) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <div
        className="d-flex flex-row align-items-end justify-content-end"
        style={{ width: "100%" }}
      >
        <select
          className="form-control-sm"
          style={{
            position: "relative",
            borderRadius: "50px",
            marginLeft: "3rem",
          }}
        >
          <option value="student">Student</option>
          <option value="profesor">Profesor</option>
        </select>
      </div>
      <form id="regForm" action={handleConfirm}>
        <div className="form-group">
          <label htmlFor="inputFirstName">Nume:</label>
          <input
            type="text"
            className="form-control"
            value={regFName}
            onChange={(e) => setRegFName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputLastName">Preume:</label>
          <input
            type="text"
            className="form-control"
            value={regLName}
            onChange={(e) => setRegLName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email:</label>
          <input
            type="mail"
            className="form-control"
            placeholder="student@stud.upb.ro"
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Parola:</label>
          <input
            type="password"
            className="form-control"
            value={regPass}
            onChange={(e) => setRegPass(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkPassword">Confirma parola:</label>
          <input
            type="password"
            className="form-control"
            value={regConfPass}
            onChange={(e) => setRegConfPass(e.target.value)}
          />
        </div>
        <br />
        <button
          className="btn-choose"
          form="regForm"
          disabled={active}
          onClick={createUser}
        >
          Înregistrare
        </button>
      </form>
    </div>
  );
}

export default RegPopup;
