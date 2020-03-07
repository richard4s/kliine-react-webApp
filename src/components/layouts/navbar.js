import React, { Component } from 'react'
import { Image, Grid, Menu, Dropdown, Icon } from 'semantic-ui-react'

import Logo from '../assets/images/kliine-default.png'

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'messages'
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        
        const { activeItem } = this.state;

        const trigger = (
            <span>
              <Icon name='user' /> Hello, Bob
            </span>
          )

          const options = [
            { key: 'profile', text: 'Profile' },
            { key: 'log-out', text: 'LogOut' },
          ]

        return(
            <Menu secondary fluid>
                <Grid centered stretched verticalAlign={'middle'} textAlign={'center'}>
                    <Grid.Column width={2}>
                        <Image
                            alt='Kliine Logo'
                            size='large'
                            loading="lazy"
                            src={Logo}
                            srcSet={Logo + ' 2x'} 
                        />
                    </Grid.Column>

                    <Grid.Column width={6}>

                        <Menu.Item
                            name='account'
                            active={activeItem === 'account'}
                            onClick={this.handleItemClick}
                        >
                            <p>Account Overview</p>   
                        </Menu.Item>

                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Menu.Menu position='right'>
                            <Dropdown trigger={trigger} options={options} />
                        </Menu.Menu>
                    </Grid.Column>
                </Grid>
            </Menu>
        )
    }
}