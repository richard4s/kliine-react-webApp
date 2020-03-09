import React, { Component } from 'react'

import { Col, Row, Container } from 'react-bootstrap'
import * as Icon from 'react-feather';

import '../assets/css/custom.css'

export default class SideNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'home'
        }
    }

    render() {
        
        return(
            <Container fluid>
                <Row>
                    <Col sm={3}>
                        <div>
                            <p className="mont-subhead">Dashboard</p>
                        </div>

                        <div>
                            <Icon.Home color="#FF743C" size={24} />
                            <span className="mont-subhead colored-text">Home</span>
                        </div>

                        <div>
                            <Icon.Home color="#FF743C" size={24} />
                            <span className="mont-subhead colored-text">Home</span>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}