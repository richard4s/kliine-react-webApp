import React, { Component } from 'react'
// import { Image, Grid, Menu } from 'semantic-ui-react'

import Navbar from '../layouts/navbar'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'messages'
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        
        // const { activeItem } = this.state

        return(
            <>
                <Navbar />
            </>
        )
    }
}