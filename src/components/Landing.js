import React from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap'
import profilePic from '../pictures/profile_picc_short.jpg'
// import {profilePic} from '../pictures/profile_picc_short.jpg'

export default function Landing() {
    return (
        <Container className="landing" fluid>
            <Row className="align-items-center">
                <Col
                    md="6"
                    style={{ backgroundImage: `url(${profilePic})` }}
                    className="profile-pic"
                >
                    <Container className="header-section">
                        <Row><h1 className="text-md-left m-0">Lucky</h1></Row>
                        <Row className="h1-text">
                            <Col size="6"><p>A.K.A. Lukas</p></Col>
                            <Col className="text-right" size="6"><p>Web Developer</p></Col>
                        </Row>
                    </Container>

                    {/* <h1 className="text-center text-md-left m-0">Lucky</h1>
                    <div className="h1-text mx-auto mx-md-0 d-flex flex-md-row justify-content-between">

                        <p className="text-center">A.K.A. Lukas</p>
                        <p className="text-center">Web Developer</p>
                    </div> */}
                </Col>
                <Col md="6" className="">
                    <div className="buttons text-center">
                        <Button color="success" className="m-3 btn" size="lg">Projects</Button>
                        <Button color="success" className="m-3 btn" size="lg">Resume</Button>
                    </div>
                    <div className="">

                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
                    </div>
                </Col>

            </Row>
        </Container>
    )
}
