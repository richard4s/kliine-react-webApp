import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

import '../assets/css/custom.css'
import Logo from '../assets/images/kliine-default.png'

export default class AuthNav extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Navbar bg="light" className="bg-transparent">
                    <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        width="150"
                        className="d-inline-block align-top"
                        alt="Kliine logo"
                    />
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}