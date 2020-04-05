import React, { Component, useState } from 'react'
import { Col, Row, Container, Nav, Tabs, Tab, } from 'react-bootstrap'

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

    ControlledTabs() {
        const [key, setKey] = useState('home');
      
        return (
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="home" title="Home">
              <p>rthdhdtydydy</p>
            </Tab>
            <Tab eventKey="profile" title="Profile">
            <p>rthdhdtydydy</p>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
            <p>rthdhdtydydy</p>
            </Tab>
          </Tabs>
        );
      }

    render() {
        return(
            <section className="bg-tint">
                <Navbar />
                <SideNav page="plans" />

                <Container >

                    <Row className="justify-content-md-center">
                        <Col sm={12}>
                            <this.ControlledTabs />
                        </Col>
                    </Row>

                </Container>
            </section>
        )
    }
}