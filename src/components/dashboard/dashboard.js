import React, { Component } from 'react'
import { Image, Grid, Menu } from 'semantic-ui-react'

// import {Logo} from '../assets/images/kliine-default.png'
import Logo from '../assets/images/kliine-default.png'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'messages'
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        
        const { activeItem } = this.state

        return(
            <Menu secondary>

                <Grid>
                    <Grid.Row>

                        <Grid.Column width={6}>
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                                >
                                    <Image
                                        alt='Kliine Logo'
                                        size='medium'
                                        loading="lazy"
                                        src={Logo}
                                        srcSet={Logo + ' 2x'} 
                                    />
                                </Menu.Item>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Menu.Item
                                name='account'
                                active={activeItem === 'account'}
                                onClick={this.handleItemClick}
                            >
                                <p>Account Overview</p>   
                            </Menu.Item>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Menu.Menu position='right'>
                                <Menu.Item
                                    name='logout'
                                    active={activeItem === 'logout'}
                                    onClick={this.handleItemClick}
                                />
                            </Menu.Menu>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Menu>
        )
    }
}