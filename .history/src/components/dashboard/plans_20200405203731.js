import React, { Component } from 'react'
import { Col, Row, Container, Card, Badge, Image } from 'react-bootstrap'

import '../assets/css/custom.css'

import CoolTabs from 'react-cool-tabs';

import Navbar from '../layouts/navbar'
import SideNav from '../layouts/sidebar'

// import * as Icon from 'react-feather';

import SVG1 from '../assets/images/svg1.svg'
import SVG2 from '../assets/images/svg2.svg'
import SVG3 from '../assets/images/svg3.svg'
import SVG4 from '../assets/images/svg4.svg'

class OurPlans extends Component {
    render() {
      return <Row className="justify-content-md-center">

      <Col xs lg="6">
          <div className="top-bottom-pad">
          <Card style={{ width: '420px', backgroundColor: '#FFBDA3', border: 'none' }}>
              <Card.Body >
                  <Card.Text className="mont-card-header">
                    <Row>
                        <Col xs lg="6">
                            YOUNGIN <br />20,000.00
                        </Col>
                        <Col xs lg="6">
                            <Image src={SVG1}  />
                        </Col>
                        <Col xs lg="6">
                            SUBSCRIBE
                        </Col>
                    </Row>
                  </Card.Text>
              </Card.Body>
          </Card>
          </div>
      </Col>

      <Col xs lg="6">
          <div className="top-bottom-pad">
          <Card style={{ width: '420px', backgroundColor: '#FFBDA3', border: 'none' }}>
              <Card.Body >
                  <Card.Text className="mont-card-header">
                    <Row>
                        <Col xs lg="6">
                            STANDARD <br />27,000.00
                        </Col>
                        <Col xs lg="6">
                            <Image src={SVG2}  />
                        </Col>
                        <Col xs lg="6">
                            SUBSCRIBE
                        </Col>
                    </Row>
                  </Card.Text>
              </Card.Body>
          </Card>
          </div>
      </Col>

      <Col xs lg="6">
          <div className="top-bottom-pad">
          <Card style={{ width: '420px', backgroundColor: '#FFBDA3', border: 'none' }}>
              <Card.Body >
                  <Card.Text className="mont-card-header">
                    <Row>
                        <Col xs lg="6">
                            STANDARD <br />27,000.00
                        </Col>
                        <Col xs lg="6">
                            <Image src={SVG3}  />
                        </Col>
                        <Col xs lg="6">
                            SUBSCRIBE
                        </Col>
                    </Row>
                  </Card.Text>
              </Card.Body>
          </Card>
          </div>
      </Col>

      <Col xs lg="6">
          <div className="top-bottom-pad">
          <Card style={{ width: '420px', backgroundColor: '#FFBDA3', border: 'none' }}>
              <Card.Body >
                  <Card.Text className="mont-card-header">
                    <Row>
                        <Col xs lg="6">
                            STANDARD <br />27,000.00
                        </Col>
                        <Col xs lg="6">
                            <Image src={SVG4}  />
                        </Col>
                        <Col xs lg="6">
                            SUBSCRIBE
                        </Col>
                    </Row>
                  </Card.Text>
              </Card.Body>
          </Card>
          </div>
      </Col>
  </Row>
    }
  }
  class ActivePlans extends Component {
    render() {
      return <Row>

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
                              <Badge variant="warning"><span className="tint-text-color">YOUNGIN</span></Badge>
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

      <Col xs lg="6">
          <div className="top-bottom-pad">
          <Card style={{ width: '420px', border: 'none' }}>
              <Card.Body className="card-plan-push">
                  <Card.Text>
                  <div className="shift-down">
                      <Row className="justify-content-md-center">
                          <Col xs lg="6">
                              Mom's House
                          </Col>
                          <Col md="6">
                              <Badge variant="warning"><span className="tint-text-color">STANDARD</span></Badge>
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
                                style={{ width:  '100%', height:  '180vh'}}
                                activeTabStyle={{ background:  '#f8f9fa', color:  '#8AA8C7' , fontWeight: 800, textTransform: 'uppercase'}}
                                unActiveTabStyle={{ background:  '#f8f9fa', color:  '#0E5092', fontWeight: 800, textTransform: 'uppercase' }}
                                activeLeftTabBorderBottomStyle={{ background:  '#0E5092', height:  2,  }}
                                activeRightTabBorderBottomStyle={{ background:  '#0E5092', height:  2 }}
                                tabsBorderBottomStyle={{ background:  'transparent'}}
                                leftContentStyle={{ background:  '#f8f9fa', margin: '25px' }}
                                rightContentStyle={{ background:  '#f8f9fa', margin: '25px' }}
                                leftTabTitle={'Our Plans'}
                                rightTabTitle={'Active Plans'}
                                leftContent={<OurPlans />}
                                rightContent={<ActivePlans />}
                                contentTransitionStyle={'transform 0.6s ease-in'}
                                borderTransitionStyle={'all 0.6s ease-in'}/>
                            </Col>
                    </Row>

                    

                </Container>
            </section>
        )
    }
}