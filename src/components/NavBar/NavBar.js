import logo from "../../img/logo.png";

import React from "react";
import "../../index.css";
import "./Navbar.css";

import { Image, Navbar, Nav } from "react-bootstrap";

export default class NavBar extends React.Component {
  render(props) {
    return (
      <Navbar
        expand="lg"
        className="navbar transparent nav-bg bg-white d-flex flex-row align-content-centner justify-content-between"
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
              height: "auto",
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
                Logare
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <Nav.Link
                className="btn bg-dark nav-li text-white"
                onClick={this.props.regPopup}
                eventKey="2"
              >
                Creare cont
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <Nav.Link
                className="btn bg-dark nav-li text-white"
                onClick={this.props}
                eventKey="3"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
