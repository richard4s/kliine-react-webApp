import React, { Component, useState } from 'react'
import { Col, Row, Container, Nav, Tabs, Tab, } from 'react-bootstrap'

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

    ControlledTabs() {
        const [key, setKey] = useState('home');
      
        return (
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="justify-content-md-center"
            >
            <Tab eventKey="home" title="Home">
              <p>Home</p>
            </Tab>
            <Tab eventKey="profile" title="Profile">
            <p>Profile</p>
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
                            <CoolTabs
                                tabKey={'1'}
                                style={{ width:  '100%', height:  '100vh', background:  'white' }}
                                activeTabStyle={{ background:  'red', color:  'white' }}
                                unActiveTabStyle={{ background:  'green', color:  'black' }}
                                activeLeftTabBorderBottomStyle={{ background:  '#0E5092', height:  2,  }}
                                activeRightTabBorderBottomStyle={{ background:  '#0E5092', height:  2 }}
                                tabsBorderBottomStyle={{ background:  'transparent', marginTop:  '40px' }}
                                leftContentStyle={{ background:  'lightgreen', marginTop:  '40px' }}
                                rightContentStyle={{ background:  'lightblue' }}
                                leftTabTitle={'Our Plans'}
                                rightTabTitle={'Active Plans'}
                                leftContent={<Content1/>}
                                rightContent={<Content2/>}
                                contentTransitionStyle={'transform 0.6s ease-in'}
                                borderTransitionStyle={'all 0.6s ease-in'}/>
                            </Col>
                    </Row>

                </Container>
            </section>
        )
    }
}