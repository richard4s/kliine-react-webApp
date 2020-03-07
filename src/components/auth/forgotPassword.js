import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

// import * as Icon from 'react-feather'

import '../assets/css/custom.css'

import AuthNav from './authNav'

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <AuthNav />
                <section >
                    <Container>
                        <Row className="justify-content-md-center" align="center">
                            <Col md="auto">
                                <h2 className="mont-header-font">RESET PASSWORD</h2>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <section className="form-box">

                                <Form>

                                    <Form.Group className="custom-form-box" as={Col} controlId="formGridEmail">
                                        <Form.Label className="custom-label">Email</Form.Label>
                                        <Form.Control className="custom-input" type="email" />
                                    </Form.Group>                                    

                                    <Button className="signup-btn" variant="light" type="submit" size="lg" block>
                                        SEND RESET PASSWORD
                                    </Button>
                                </Form>

                                </section>
                            </Col>
                        </Row>
                    </Container> 
                </section>
            </div>
        )
    }
}