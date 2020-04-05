import React, { Component, useState } from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'

import '../assets/css/custom.css'

import CoolTabs from 'react-cool-tabs';

import Navbar from '../layouts/navbar'
import SideNav from '../layouts/sidebar'

// import * as Icon from 'react-feather';

class Content1 extends Component {
    render() {
      return <div>
        this is Content1
      </div>
    }
  }
  class Content2 extends Component {
    render() {
      return <div>
        this is Content2
      </div>
    }
  }

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

                    <Row className="justify-content-md-center">
                        <Col sm={12} lg={12}>
                            <CoolTabs
                                tabKey={'1'}
                                style={{ width:  '100%', height:  '100vh'}}
                                activeTabStyle={{ background:  '#f8f9fa', color:  '#8AA8C7' , fontWeight: 800, textTransform: 'uppercase'}}
                                unActiveTabStyle={{ background:  '#f8f9fa', color:  '#0E5092', fontWeight: 800, textTransform: 'uppercase' }}
                                activeLeftTabBorderBottomStyle={{ background:  '#0E5092', height:  2,  }}
                                activeRightTabBorderBottomStyle={{ background:  '#0E5092', height:  2 }}
                                tabsBorderBottomStyle={{ background:  'transparent'}}
                                leftContentStyle={{ background:  '#f8f9fa', margin: '25px' }}
                                rightContentStyle={{ background:  '#f8f9fa', margin: '25px' }}
                                leftTabTitle={'Our Plans'}
                                rightTabTitle={'Active Plans'}
                                leftContent={<Content1/>}
                                rightContent={<Content2/>}
                                contentTransitionStyle={'transform 0.6s ease-in'}
                                borderTransitionStyle={'all 0.6s ease-in'}/>
                            </Col>
                    </Row>

                    <Row className="justify-content-md-center">

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

                </Container>
            </section>
        )
    }
}