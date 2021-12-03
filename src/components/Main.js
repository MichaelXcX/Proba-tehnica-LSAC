import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

//Components
import NavBar from "./NavBar/NavBar";
import Carousel from "./Carousel/Carousel";
import Popup from "./Popup/Popup";
import { Data } from "./Carousel/CarouselData";
import Section from "./Section/Section";
import Choose from "./Choose/Choose";
import Contact from "./Contact/Contact";
import RegPopup from "./RegPopup";
import LogPopup from "./LogPopup";

import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";

import { db, auth } from "../server";

function Main() {
  const [regPopup, setRegPopup] = useState(false);
  const [logPopup, setLogPopup] = useState(false);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="page-bg">
      <NavBar
        logPopup={() => setLogPopup(true)}
        regPopup={() => setRegPopup(true)}
      />
      <Section />
      <Choose />
      <Popup trigger={regPopup} setTrigger={setRegPopup}>
        <RegPopup />
      </Popup>

      <Popup trigger={logPopup} setTrigger={setLogPopup}>
        <LogPopup />
      </Popup>
      <Contact />
    </div>
  );
}

export default Main;
