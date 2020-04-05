import React, { Component } from 'react'

import { Navbar, Nav, Image } from 'react-bootstrap'

import * as Icon from 'react-feather'

import '../assets/css/custom.css'
import Logo from '../assets/images/kliine-default.png'
import avatar from '../assets/images/photo-of-woman-wearing-headscarf-1820919.jpg'

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