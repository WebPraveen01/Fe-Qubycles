import React from "react";
import { Button } from "react-bootstrap";
import "./VerifyCode.css";
import main_image from "../assets/mobile-phone.svg";
import qubycles_logo from "../assets/qubycles_logo.svg";
import angle from "../assets/angle.svg";
import eye from "../assets/trailing-icon.svg";
const VerifyCode = () => {
  return (
    <div>
      <div className="row fullPage">
        <div className="left col-lg-6">
          <div className="mt-4">
            <img className="logo" src={qubycles_logo} alt="logo" />
          </div>
          <div className="formDiv">
            <div>
              <div className="backToLogin">
                <button className="anglebtn mb-3 ">
                  <img className="angle" src={angle} alt="angle" />
                </button>
                <p className=" mt-2">Back to login</p>
              </div>
              <div>
                <h1 className="fw-bold fs-1">Verify code</h1>
                <p className="text pt-3">
                  An authentication code has been sent to your email.
                </p>
              </div>
            </div>

            <form>
              <div className="mt-4 input-group">
                <img src={eye} alt="eye" />
                <input type="password" required />
                <label>Enter Code</label>
              </div>
            </form>
            <div>
              <p>
                Didn't recieve a code? <a href="">Resend</a>
              </p>
            </div>
            <div>
              <Button
                className=" border-0 mt-3"
                variant="secoundary"
                type="submit"
              >
                Verify
              </Button>
            </div>
          </div>
        </div>
        <div className=" Right my-5 col-lg-6">
          <div className="rightImageDiv">
            <img
              className="studentImage"
              src={main_image}
              alt="Student studying using laptop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerifyCode;
