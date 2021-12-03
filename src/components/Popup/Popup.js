import React from "react";
import { BsFullscreenExit } from "react-icons/bs";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup d-flex align-items-center justify-content-center text-white">
      <div className="popup-inner d-flex flex-column align-items-center ">
        <div
          className="d-flex flex-row-reverse"
          style={{ width: "100%", padding: "1rem" }}
        >
          <button
            className="btn close-btn text-white"
            onClick={() => props.setTrigger(false)}
          >
            <strong>
              <BsFullscreenExit />
            </strong>
          </button>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
