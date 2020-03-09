import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import * as Icon from 'react-feather'

import '../assets/css/custom.css'

import AuthNav from '../layouts/authNav'

export default class Login extends Component {
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
                                <h2 className="mont-header-font">Welcome back!</h2>
                                <p className="mont-subhead">You're one step closer to freedom of chores.<br /> 
                                    <span className="mont-small">Don't have an account? <a className="link-default-colored" href="/">Signup</a></span>
                                </p>
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

                                    <Form.Group className="custom-form-box" as={Col} controlId="formGridPassword">
                                        <Form.Label className="custom-label">Password</Form.Label>
                                        <Form.Control className="custom-input" type="password" />
                                    </Form.Group>

                                    <div className="small-check">
                                        <a className="link-default" href="/forgot-password">Forgot password? <Icon.ArrowRight color="#FF743C" size={24} /></a>
                                    </div>
                                    

                                    <Button className="signup-btn" variant="light" type="submit" size="lg" block>
                                        LOG IN
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