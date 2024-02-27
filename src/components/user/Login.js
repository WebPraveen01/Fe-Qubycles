import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Login.css";
import SVG from "react-svg";
import Stack from 'react-bootstrap/Stack'
import logo from "./assets/logo.svg";
import youngboys from "./assets/youngboys.svg";
import fb from "./assets/fb.png";
import google from "./assets/google.png";
import apple from "./assets/apple.png";

function Login() {
  const [fields, handlefieldchange] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="">
      <div className="row">
        <div className="left  col-lg-6">
          <div className="mt-4">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="formDiv">
            <div>
              <div>
                <h1 className="fw-bold fs-1">Login</h1>
                <p className="text pt-3">
                  Login to access your online training account
                </p>
              </div>
            </div>

            <form>
              <div className="mt-4 input-group">
                <input type="email" required />
                <label className="change-box">Email</label>
              </div>
            </form>
            <form>
              <div className="mt-4 input-group">
                <input type="password" required />
                <label className="change-box">Password</label>
              </div>
            </form>
            <div>
              <Form.Group className="checkbox" controlId="formBasicCheckbox">
              <Stack direction="horizontal"  gap={3}>
                <Form.Check type="checkbox" label=" Remember me" />
                <a href="#"> Forgot Password </a></Stack>
              </Form.Group>
            </div>

            <div>
              <Button
                className=" border-0 mt-3"
                variant="secoundary"
                type="submit"
              >
                Submit
              </Button>
              <div className="signup">
                <p className=" pt-3">Don't have an account ? <a href="#"> Sign up </a></p>
                
              </div>
            </div>
            <div className="lineDiv">
              <div className="line"></div>
              <div className="lineText">Or login with</div>
              <div className="line"></div>
            </div>
            <div className="">
              <div className="row socialrow mt-5">
                <div className="col-lg-4">
                  <Button className="socialsbtn" variant="outline-light">
                    <img src={fb} alt="facebook" />
                  </Button>{" "}
                </div>
                <div className="col-lg-4">
                  <Button className="socialsbtn" variant="outline-light">
                    <img src={google} alt="google" />
                  </Button>{" "}
                </div>
                <div className="col-lg-4">
                  <Button className="socialsbtn" variant="outline-light">
                    <img src={apple} alt="apple" />
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" Right my-5 col-lg-6">
          <div className="rightimagediv">
            <img
              className="studentImage"
              src={youngboys}
              alt="Student studying using laptop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
