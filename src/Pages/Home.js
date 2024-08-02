import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Home.css';
import Register from './Register';
import Login from './Login';

function Home() {
    // Register modal state
    const [showRegister, setShowRegister] = useState(false);
    const handleShowRegister = () => setShowRegister(true);
    const handleCloseRegister = () => setShowRegister(false);

    // Login modal state
    const [showLogin, setShowLogin] = useState(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);

    return (
        <Container>
            <Row className='mt-5 pt-5'>
                <Col>
                    <img src="/Images/Group.png" alt="" />
                </Col>
                <Col>
                    <h1 className="my-class text-center">
                        Let’s meet new <br />people around you
                    </h1>
                    <button className='btn btn-outline-secondary mt-5 rounded-pill text-white' onClick={handleShowLogin}>
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-2 col-2">
                                <img width={60} className='' src="/Images/Group 939.png" alt="" />
                            </div>
                            <div className="col-lg-9 col-9">
                                <p className='h2'>Login with Email/Phone</p>
                            </div>
                        </div>
                    </button>
                    <br />
                    <button className='btn-one btn btn-outline-secondary mt-5 rounded-pill'>
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-2 col-2">
                                <img width={60} className='' src="/Images/Group 940.png" alt="" />
                            </div>
                            <div className="col-lg-9 col-9">
                                <p className='h2'>Login with Google</p>
                            </div>
                        </div>
                    </button>
                    <p className='disc m-5 p-5'>Don’t have an account? <span id='span' onClick={handleShowRegister}>Sign Up</span></p>
                </Col>
            </Row>
            <Register show={showRegister} handleClose={handleCloseRegister} />
            <Login show={showLogin} handleClose={handleCloseLogin} />
        </Container>
    );
}

export default Home;
