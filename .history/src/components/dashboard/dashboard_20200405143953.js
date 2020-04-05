import React, { Component } from 'react'

import { Col, Row, Container, Card } from 'react-bootstrap'

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
            <>
                <Navbar />
                <SideNav />

                <Container className="bg-tint">
                    
                    <Row className="justify-content-md-center">
                        <Col xs lg="12">
                            <div className="top-bottom-pad">
                                <p className="mont-subhead">Actions</p>
                            </div>
                        </Col>

                        <Col xs lg="6">
                            <div className="top-bottom-pad">
                            <Card style={{ width: '420px', backgroundColor: '#FFBDA3' }}>
                                <Card.Body className="card-body-push">
                                    <Card.Title className="mont-header-font">DEFAULT <br />PLANS</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
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
                            <Card style={{ width: '420px', backgroundColor: '#BDCBF9' }}>
                                <Card.Body className="card-body-push">
                                    <Card.Title className="mont-header-font">CUSTOM <br />PLANS</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="to-the-right">
                                        <Card.Link href="#" ><Icon.ArrowRight color="#FF743C" size={24} /></Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>

                
            </>
        )
    }
}