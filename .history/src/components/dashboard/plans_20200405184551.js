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
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            >
                            <Tab eventKey="home" title="Home">
                                <p>dhgghd</p>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                <p>dbhbjhdddddds</p>
                            </Tab>
                            <Tab eventKey="contact" title="Contact" disabled>
                                <p>dhbhjvdjhvhsa</p>
                            </Tab>
                            </Tabs>
                        </Col>
                    </Row>

                    </Tab.Container>
                </Container>
            </section>
        )
    }
}