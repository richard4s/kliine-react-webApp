import React, { Component } from 'react'


import * as Icon from 'react-feather';

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Redirect } from 'react-router-dom';

import '../assets/css/custom.css'
import '../assets/css/sidebar-custom.css'

export default class SideNavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'home',
            expanded: true,
        }

        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    render() {

        console.log('Width: ', this.state.width, 'Height: ', this.state.height)
        console.log('expanded', this.state.expanded)
        
        return(
        <SideNav expanded={this.state.width <= 990 ? this.state.expanded : !this.state.expanded}
            onToggle={(expanded) => {

                // if(this.state.width <= 990) {
                //     this.setState({
                //         expanded: !expanded
                //     })
                // } else {
                    this.setState({ expanded });
                // }
                
            }}
            onSelect={(selected) => {
                const path = '/' + selected;
                // if (location.pathname !== to) {
                //     history.push(to);
                // }
                return <Redirect to={path} />
            }}
>
        <SideNav.Toggle />
            <SideNav.Nav defaultSelected={this.props.page}>
                <NavItem eventKey="home">
                    <NavIcon>
                        <Icon.Home color="#FF743C" size={24} />
                    </NavIcon>
                    <NavText>
                        <span className="mont-subhead colored-text">Home</span>
                    </NavText>
                </NavItem>
                <NavItem eventKey="plans">
                    <NavIcon>
                        <Icon.Database color="#FF743C" size={24} />
                    </NavIcon>
                    <NavText>
                        <span className="mont-subhead colored-text">Plans</span>
                    </NavText>
                </NavItem>
                <NavItem eventKey="history">
                    <NavIcon>
                        <Icon.Calendar color="#FF743C" size={24} />
                    </NavIcon>
                    <NavText>
                        <span className="mont-subhead colored-text">History</span>
                    </NavText>
                </NavItem>
                <NavItem eventKey="mealsMenu">
                    <NavIcon>
                        <Icon.Clipboard color="#FF743C" size={24} />
                    </NavIcon>
                    <NavText>
                        <span className="mont-subhead colored-text">Meals Menu</span>
                    </NavText>
                </NavItem>
                <NavItem eventKey="payment">
                    <NavIcon>
                        <Icon.CreditCard color="#FF743C" size={24} />
                    </NavIcon>
                    <NavText>
                        <span className="mont-subhead colored-text">Payment</span>
                    </NavText>
                </NavItem>
                <NavItem eventKey="chat">
                    <NavIcon>
                        <Icon.MessageSquare color="#FF743C" size={24} />
                    </NavIcon>
                    <NavText>
                        <span className="mont-subhead colored-text">Chat</span>
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        )
    }
}