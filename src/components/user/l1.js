import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Login.css";
import SVG from "react-svg";
import logo from "./assets/logo.svg";
import youngboys from "./assets/youngboys.svg";
import fb from "./assets/fb.svg"
import google from "./assets/google.svg"
import apple from "./assets/apple.svg"

function Login() {
  const [fields, handlefieldchange] = useState({
    email: "",
    password: "",
  });
  return (
    <div class="row">
      <div class="left-section col-lg-6 col-md-6">
        <Navbar className="bg-body-tertiary">
          
            <Navbar.Brand href="#home">
              <img
                src={logo}
                className="qubycleslogo"
                alt="logo"
              />
            </Navbar.Brand>
        
        </Navbar>
        <div className="header">
          <h1>Login</h1>
          <p>Login to access your online training account</p>
        </div>
        <div class="row">
          <div class=" col-lg-4 col-md-4"></div>
          <div class=" col-lg-4 col-md-4">
            <Form>
              <Form.Group className="mail" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="password" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="checkbox" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button className="btn-primary  border-0 mt-3" variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
          <div className="lineDiv">
            <div className="line"></div>
            <div className="lineText">or login with</div>
            <div className="line"></div>
          </div>
          <div className="loginsocials">
          <div className="social-buttons">
            <button className="facebook-button" variant="outline-primary" style={{ marginRight: '10px' }}>
              <img
                src={fb}
                className="fb"
                alt="facebook"
              />
            </button>
            <button className="google-button" variant="outline-primary" style={{ marginRight: '10px' }}>
            <img
                src={google}
                className="google"
                alt="google"
              />
            </button>
            <button className="apple-button" variant="outline-primary" style={{ marginRight: '10px' }}>
            <img
                src={apple}
                className="apple"
                alt="apple"
              />
            </button>
          </div>
          </div>
          <div class=" col-lg-4 col-md-4"></div>
        </div>
      </div>
      <div class="right-section col-lg-6 col-md-6">
        <img
          src={youngboys}
          className="rightimage"
          alt="React Bootstrap logo"
        />
      </div>
    </div>
  );
}

export default Login;
<div>
              <Form.Group className="checkbox" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Example Checkbox" /> Remember me
              </Form.Group>
            </div>