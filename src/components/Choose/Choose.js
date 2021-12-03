import React from "react";
import { Container } from "react-bootstrap";

import "./Choose.css";

function Choose() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        margin: "0",
        padding: "0 10vh",
      }}
    >
      <div
        className="text-container d-flex flex-column align-items-center justify-content-around text-white"
        style={{
          margin: "0",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>Cum funcționează?</h1>
        <br />
        <br />
        <br />

        <div
          className="d-flex flex-row align-items-center justify-content-between"
          style={{ position: "relative", widht: "100%" }}
        >
          <div className="choose-div d-flex flex-column align-items-center justify-content-center">
            <h1 className="lead choose-text">
              <strong>Știi prea multe și vrei să predai? </strong>
            </h1>
            <h1 className="lead choose-text">
              <strong>Înscrie-te ca profesor.</strong>
            </h1>
            <br />
            <button type="button" className="text-dark btn-choose">
              <strong>Predau</strong>
            </button>
          </div>
          <div className="choose-div d-flex flex-column align-items-center justify-content-center">
            <h1 className="lead choose-text">
              <strong>Știi prea puține și vrei să înveți?</strong>
            </h1>
            <h1 className="lead choose-text">
              <strong>Înscrie-te ca student.</strong>
            </h1>
            <br />
            <button type="button" className="text-dark btn-choose">
              <strong>Învăț</strong>
            </button>
          </div>
        </div>
      </div>
      <div className="container-bg"></div>
    </div>
  );
}

export default Choose;
