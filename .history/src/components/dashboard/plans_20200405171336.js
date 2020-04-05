import React, { Component } from 'react'

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
            <>
                <Navbar />
                <SideNav page="plans" />
            </>
        )
    }
}