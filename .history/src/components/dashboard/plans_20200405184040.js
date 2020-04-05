import React, { Component } from 'react'
import { Col, Row, Container, Nav, Tab } from 'react-bootstrap'

import '../assets/css/custom.css'

import Navbar from '../layouts/navbar'
import SideNav from '../layouts/sidebar'

// import * as Icon from 'react-feather';

export default class Plans extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <section className="bg-tint">
                <Navbar />
                <SideNav page="plans" />

                <Container >
                    <Tab.Container id="controlled-tab-example" defaultActiveKey="first">

                    <Row className="justify-content-md-center">
                    <Col sm={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                    </Row>

                    </Tab.Container>
                </Container>
            </section>
        )
    }
}