import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <form className="form-contact">
        <h1 className="lead-contact text-center font-weight-bold">
          <strong>Întâmpini dificultăți?</strong>
        </h1>
        <h1 className="lead-contact text-center font-weight-bold">
          <strong>Contactează-ne!</strong>
        </h1>
        <br />
        <br />
        <div className="form-group">
          <label htmlFor="formControlInput1">
            <strong>Nume: </strong>{" "}
          </label>
          <input type="name" className="form-control" id="formControlInput1" />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="formControlInput2">
            <strong>Email: </strong>
          </label>
          <input type="email" className="form-control" id="formControlInput2" />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            <strong>Mesaj: </strong>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
      <br />
      <button className="btn-choose">
        <strong>Trimite</strong>
      </button>
    </div>
  );
}

export default Contact;
