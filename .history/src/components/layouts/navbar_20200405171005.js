import React, { Component } from 'react'

import { Navbar, Nav, Image } from 'react-bootstrap'

import * as Icon from 'react-feather'

import '../assets/css/custom.css'
import Logo from '../assets/images/kliine-default.png'
import avatar from '../assets/images/photo-of-woman-wearing-headscarf-1820919.jpg'

import CoolTabs from 'react-cool-tabs';

class Content1 extends Component {
    render() {
      return <div style={style}>
        this is Content1
      </div>
    }
  }
  class Content2 extends Component {
    render() {
      return <div style={style}>
        this is Content2
      </div>
    }
  }

export default class DashboardNavbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'messages'
        }
    }

    render() {
        
        return(
            <Navbar fixed="top" bg="light" expand="lg" className="">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Navbar.Brand href="/">
                            <img
                                src={Logo}
                                width="150"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    {/* </Navbar.Collapse> */}
                    <Nav className="mr-auto">
                        <CoolTabs
                            tabKey={'1'}
                            style={{ width:  550, height:  500, background:  'white' }}
                            activeTabStyle={{ background:  'red', color:  'white' }}
                            unActiveTabStyle={{ background:  'green', color:  'black' }}
                            activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
                            activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4 }}
                            tabsBorderBottomStyle={{ background:  'orange', height:  4 }}
                            leftContentStyle={{ background:  'lightgreen' }}
                            rightContentStyle={{ background:  'lightblue' }}
                            leftTabTitle={'Left title'}
                            rightTabTitle={'Right title'}
                            leftContent={<Content1/>}
                            rightContent={<Content2/>}
                            contentTransitionStyle={'transform 0.6s ease-in'}
                            borderTransitionStyle={'all 0.6s ease-in'}/>
                    </Nav>
                    <div inline>
                        <Image width="50" src={avatar} roundedCircle />
                        <span className="mont-subhead shift-left">
                            Hi, <span className="colored-text">Oluwatosin</span> 
                            <Icon.LogOut color="#FF743C" size={24} />
                        </span>
                    </div>
                
            </Navbar>
        )
    }
}