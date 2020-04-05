import React, { Component } from 'react'

import { Col, Row, Container, Card, Badge } from 'react-bootstrap'

import '../assets/css/custom.css'

import Navbar from '../layouts/navbar'
import SideNav from '../layouts/sidebar'

import * as Icon from 'react-feather';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {

        return(
            
            <section className="bg-tint">
                <Navbar />
                <SideNav />

                <Container >
                    
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="12">
                            <div className="top-bottom-pad">
                                <p className="mont-subhead">Actions</p>
                            </div>
                        </Col>

                        <Col xs lg="6">
                            <div className="top-bottom-pad">
                            <Card style={{ width: '420px', backgroundColor: '#FFBDA3', border: 'none' }}>
                                <Card.Body className="card-body-push">
                                    <Card.Title className="mont-header-font">DEFAULT <br />PLANS</Card.Title>
                                    <Card.Text>
                                        Choose the best plan that suits your needs <br />from our pre-made plans.
                                    </Card.Text>
                                    <div className="to-the-right">
                                        <Card.Link href="#" ><Icon.ArrowRight color="#FF743C" size={24} /></Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            </div>
                        </Col>

                        <Col xs lg="6">
                            <div className="top-bottom-pad">
                            <Card style={{ width: '420px', backgroundColor: '#BDCBF9', border: 'none' }}>
                                <Card.Body className="card-body-push">
                                    <Card.Title className="mont-header-font">CUSTOM <br />PLANS</Card.Title>
                                    <Card.Text>
                                        You have the power to create plans 100 <br />different ways to suit your needs.
                                    </Card.Text>
                                    <div className="to-the-right">
                                        <Card.Link href="#" ><Icon.ArrowRight color="#FF743C" size={24} /></Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="12" lg="12">
                            <div className="top-bottom-pad">
                                <p className="mont-subhead">Active Plans</p>
                            </div>
                        </Col>

                        <Col xs lg="6">
                            <div className="top-bottom-pad">
                            <Card style={{ width: '420px', border: 'none' }}>
                                <Card.Body className="card-plan-push">
                                    <Card.Text>
                                    <div className="shift-down">
                                        <Row className="justify-content-md-center">
                                            <Col xs lg="6">
                                                House Clean
                                            </Col>
                                            <Col md="6">
                                                <Badge variant="warning"><span className="tint-text-color">Youngin</span></Badge>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr />
                                    <div className="bottom-card-down">
                                        <Row className="justify-content-md-center">
                                            <Col xs lg="6">
                                                <span className="colored-text">Plan Price </span><br/>
                                                ₦20,000
                                            </Col>
                                            <Col md="6">
                                                <span className="colored-text">Exp Date</span><br/>
                                                01/Jan/2020
                                            </Col>
                                        </Row>
                                    </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </section>
        )
    }
}