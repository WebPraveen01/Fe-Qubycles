import React from "react";
import { Button } from "react-bootstrap";
import "./Forgot.css";
import main_image from "../assets/mainImage.png";
import qubycles_logo from "../assets/qubycles_logo.svg";
import angle from "../assets/angle.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import facebook from "../assets/facebook.png";
const ForgetPage = () => {
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
                <h1 className="fw-bold fs-1">Forgot your password?</h1>
                <p className="text pt-3">
                  Don't worry, happens to all of us. Enter your email below to
                  recover your password.
                </p>
              </div>
            </div>

            <form>
              <div className="mt-4 input-group">
                <input type="email" required />
                <label>Email</label>
              </div>
            </form>
            <div>
              <Button
                className=" border-0 mt-3"
                variant="secoundary"
                type="submit"
              >
                Submit
              </Button>
            </div>
            <div className="lineDiv">
              <div className="line"></div>
              <div className="lineText">Or login with</div>
              <div className="line"></div>
            </div>
            <div className="container">
              <div className="row socialrow mt-5">
                <div className="socialLeft col-lg-4">
                  <Button className="socialsbtn" variant="outline-light">
                    <img src={facebook} alt="facebook" />
                  </Button>{" "}
                </div>
                <div className="socialMiddle col-lg-4">
                  <Button className="socialsbtn" variant="outline-light">
                    <img src={google} alt="google" />
                  </Button>{" "}
                </div>
                <div className="socialRight col-lg-4">
                  <Button className="socialsbtn" variant="outline-light">
                    <img src={apple} alt="apple" />
                  </Button>{" "}
                </div>
              </div>
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
export default ForgetPage;
