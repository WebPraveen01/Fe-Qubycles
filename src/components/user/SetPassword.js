import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Login.css";
import SVG from "react-svg";
import Stack from "react-bootstrap/Stack";
import logo from "./assets/logo.svg";
import man from "./assets/man-holding-cup.svg";

function SetPassword() {
  const [fields, handlefieldchange] = useState({
    createPassword: "",
    ReenterPassword: "",
  });
  return (
    <div className="">
      <div className="row">
        <div className="left sm-4 col-lg-6">
          <div className="mt-4">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="formDiv">
            <div>
              <div>
                <h1 className="fw-bold fs-1">Set a Password</h1>
                <p className="text pt-3">
                  Your previous password has been rested.Please set a new
                  password for your account.
                </p>
              </div>
            </div>

            <form>
              <div className="mt-4 input-group">
                <input type="email" required />
                <label className="change-box">Create Password</label>
              </div>
            </form>
            <form>
              <div className="mt-4 input-group">
                <input type="password" required />
                <label className="change-box"> Re-enter Password</label>
              </div>
            </form>

            <div>
              <Button
                className=" border-0 mt-3"
                variant="secoundary"
                type="submit"
              >
                Set Password
              </Button>
            </div>
          </div>
        </div>

        <div className=" Right my-5 col-lg-6">
          <div className="rightimagediv">
            <img
              className="man"
              src={man}
              alt="Student studying using laptop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;
