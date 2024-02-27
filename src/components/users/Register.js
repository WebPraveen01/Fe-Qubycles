import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  './Register.css'

const Register = () => {
    const [fields, handleFieldChange] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    return (
        <>
            <Link to="/register"></Link>
            <Form>
            <h2>Sign up</h2>
                <Form.Group className="p-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="email" placeholder="example@gmail.com" value={fields.email} onChange={handleFieldChange} />
                </Form.Group>

                <Form.Group className="p-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="must be 8 character" value={fields.password} onChange={handleFieldChange} />
                </Form.Group>

                <Form.Group className=" p-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder=" repeat Password" value={fields.confirmpassowrd} onChange={handleFieldChange} />
                </Form.Group>
                <div className="swipe">
                <span className="daily">Daily Reports</span>
                <h5>Get a daily activity report via email</h5>
                    <label class="switch">
                        <input type="checkbox" />
                        <span className="slider round">ON</span>
                        <span class="">Off</span>
                    </label>

                </div>

                <Button className="login" variant="primary" type="submit">
                    Log in
                </Button>
                <h5 className="footer">Already have a account? <span><a href="">Log in!</a></span></h5>
            
            </Form>

        </>
    )
}


export default Register;