import logo from "../../img/logo.png";

import React from "react";
import "../../index.css";
import "./UserNav.css";

import { Image, Navbar, Nav } from "react-bootstrap";

export default class NavBar extends React.Component {
  render(props) {
    return (
      <Navbar
        expand="lg"
        className="navbar transparent nav-bg bg-white d-flex flex-row align-content-centner justify-content-center"
        style={{
          position: "relative",
        }}
      >
        <Image
          src={logo}
          style={{ position: "relative", margin: "0 5rem", width: "auto" }}
          alt="#"
          fluid
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="list-unstyled ms-auto"
            style={{
              position: "relative",
              height: "100%",
              width: "auto",
              margin: "0 5rem",
            }}
          >
            <Nav.Item>
              <Nav.Link
                className="btn bg-dark nav-li text-white"
                onClick={this.props.logPopup}
                eventKey="1"
              >
                Meditatii
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <Nav.Link
                className="btn bg-dark nav-li text-white"
                onClick={this.props.regPopup}
                eventKey="2"
              >
                Inrolari
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
