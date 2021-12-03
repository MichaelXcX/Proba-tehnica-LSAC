import React from "react";
import { Container } from "react-bootstrap";

import Image from "../../img/Asset 5 1.png";

import "./Section.css";

function Section() {
  return (
    <Container
      className="d-flex flex-row align-items-center justify-content-between"
      style={{ padding: "7.5vh 0" }}
    >
      <div
        className="d-flex flex-column align-item-center justify-content-center text"
        style={{
          position: "relative",
          width: "50%",
          height: "100%",
          padding: "2vh 4vw",
        }}
      >
        <h1>Învățatul nu a fost niciodată mai simplu!</h1>
        <h3>
          Platforma ideală pentru meditații online, atât pentru profesori, cât
          si pentru studenți.
        </h3>
      </div>
      <div>
        <img className="img-fluid" src={Image} alt="#" />
      </div>
    </Container>
  );
}

export default Section;
