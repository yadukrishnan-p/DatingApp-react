import React, { useState, Fragment } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './Register.css';

function Register({ show, handleClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        otp: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/auth/register', formData);
            alert("registered successfully!");
            console.log(res.data);
            handleClose();
        } catch (err) {
            console.error(err.response.data);
        }
    };

    const generateOtp = async () => {
        try {
            const res = await axios.post('http://localhost:4000/api/auth/send-verification-code', { phone: formData.phone });
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone" className="mt-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword" className="mt-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <div className="generate-otp mt-3" onClick={generateOtp}>
                            Generate OTP <span role="img" aria-label="refresh">🔄</span>
                        </div>
                        <Form.Group controlId="formOtp" className="mt-3">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control
                                type="text"
                                name="otp"
                                value={formData.otp}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3 w-100">
                            Register
                        </Button>
                        <Button variant="dark" type="button" className="mt-3 w-100">
                            Social Media Login
                        </Button>
                    </Form>
                    <div className="mt-3 text-center">
                        <span>Already have an account? <a href="#" onClick={handleClose}>Log In</a></span>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default Register;
