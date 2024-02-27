import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo1.svg'
import pics from './assets/youngboy.svg'
import Google_img from './assets/google.png';
import Facbook_img from './assets/facebook.png'
import Apple_img from './assets/apple.png';
import './users/SignUp.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={logo} style={{ height: 100, width: 200 }} alt="our Logo" />
                </div>
            </div>
            <div class="container overflow-hidden text-center">
                <div className="row gy-5">
                    <div className="col-6">
                        <div class="p-3">
                            <div className=" Right">
                                <div>
                                    <img
                                        className="studentImage"
                                        src={pics} style={{ height: 550, width: 300 }}
                                        alt="Student studying using laptop"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-6">
                        <div className="p-3">
                            <h2 className="sign-text">Sign up</h2>
                            <p className="sign-text">
                                Let’s get you all st up so you can access your personal accoun
                            </p>



                            <form className="mb-3">
                                <div class="row g-0 gap-3 ">
                                    <div className="mt-4 input-group col">
                                        <input type="email" required />
                                        <label>First Name</label>
                                    </div>
                                    <div className="mt-4 input-group col ">
                                        <input type="email" required />
                                        <label>Last Name</label>
                                    </div>
                                </div>

                                <div class="row  g-0 gap-3">
                                    <div className="mt-4  input-group col ">
                                        <input type="email" required />
                                        <label>Email</label>
                                    </div>
                                    <div className="mt-4 input-group col">
                                        <input type="email" required />
                                        <label>Phone Number</label>
                                    </div>
                                </div>

                                <div className="mt-4  input-group col me-3">
                                    <input type="password" required />
                                    <label>Password</label>
                                </div>
                                <div className="mt-4  input-group col me-3">
                                    <input type="password" required />
                                    <label>Confirm Password</label>
                                </div>
                                <div className="clickbox">
                                    <input type="checkbox" value="" />
                                    <label className="change-value"><span>I agree to all the Terms and Privacy Policies</span> </label>
                                </div>

                                <Button className="d-grid color" variant="secondary" size="lg">
                                    Create Account
                                </Button>
                                <h5 className="footer">Already have a account? <span><a href="">Log in!</a></span></h5>

                            </form>

                            {/* <Form>
                                <Row className="mb-1 input-roup">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Firs Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-1 input-roup">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Firs Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-1" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formGridAddress2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>

                                <Row className="mb-1">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                </Row>

                                <Form.Group className="mb-2 mt-3" id="formGridCheckbox">
                                    <Form.Check  type="checkbox" label="I agree to all Term and Privacy policy" />
                                </Form.Group>

                                <Button className="d-grid gap-5 color" variant="secondary" size="lg">
                                    Create Account
                                </Button>
                            </Form> */}
                            <div>

                            </div>
                            <div className="lineDiv">
                                <div className="line"></div>
                                <div className="lineText"> Or Sign up with</div>
                                <div className="line"></div>
                            </div>
                            <div className="">
                                <div className="row socialrow mt-5">
                                    <div className="col-lg-4">
                                        <Button className="socialsbtn" variant="outline-light">
                                            <img src={Facbook_img} alt="facebook" />
                                        </Button>
                                    </div>
                                    <div className="col-lg-4">
                                        <Button className="socialsbtn" variant="outline-light">
                                            <img src={Google_img} alt="google" />
                                        </Button>{" "}
                                    </div>
                                    <div className="col-lg-4">
                                        <Button className="socialsbtn" variant="outline-light">
                                            <img src={Apple_img} alt="" />
                                        </Button>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default SignUp;