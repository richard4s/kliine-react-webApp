import React, { Component, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

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
                        <Col sm lg={12}>
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

                </Container>
            </section>
        )
    }
}