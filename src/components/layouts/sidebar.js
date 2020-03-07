import React, { Component } from 'react'
import { Header, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

// import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import * as Icon from 'react-feather';

export default class SideNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'home'
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        
        const { activeItem } = this.state;

        return(
            <div className="sidebar-height">
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    icon='labeled'
                    vertical
                    visible
                    width='wide' 
                >
                    <Menu.Item as='a' name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick} >
                        <Icon.Home className='icon-align' color='#FF743C'  />
                        <span className='icon-text-align' >Home</span>
                    </Menu.Item>
                    <Menu.Item as='a' name='plans'
                            active={activeItem === 'plans'}
                            onClick={this.handleItemClick}>
                        <Icon.Database className='icon-align' color='#FF743C'  />
                        <span className='icon-text-align'>Plans</span>
                    </Menu.Item>
                    <Menu.Item as='a' name='history'
                            active={activeItem === 'history'}
                            onClick={this.handleItemClick}>
                        <Icon.Calendar className='icon-align' color='#FF743C'  />
                        <span className='icon-text-align'>History</span>
                    </Menu.Item>
                    <Menu.Item as='a' name='account'
                            active={activeItem === 'account'}
                            onClick={this.handleItemClick}>
                        <Icon.Share className='icon-align' color='#FF743C'  />
                        <span className='icon-text-align'>Account</span>
                    </Menu.Item>
                    <Menu.Item as='a' name='payment'
                            active={activeItem === 'payment'}
                            onClick={this.handleItemClick}>
                        <Icon.CreditCard className='icon-align' color='#FF743C'  />
                        <span className='icon-text-align'>Payment</span>
                    </Menu.Item>
                    
                    <Menu.Item as='a' name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}>
                        <Icon.LogOut className='icon-align' color='#FF743C'  />
                        <span className='icon-text-align'>Logout</span> 
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Total Plans</Header>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
            </div>
        )
    }
}