import React, { Component } from 'react'

import { Col, Row, Container, Card } from 'react-bootstrap'

import '../assets/css/custom.css'

import Navbar from '../layouts/navbar'
import SideNav from '../layouts/sidebar'

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

                <Container>
                    
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md="auto">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>

                
            </>
        )
    }
}