import React, { Component } from 'react'

import { Col, Row, Container } from 'react-bootstrap'
import * as Icon from 'react-feather';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
            // <Container fluid>
            //     <Row>
            //         <Col sm={3}>
            //             <div>
            //                 <p className="mont-subhead">Dashboard</p>
            //             </div>

            //             <div>
            //                 <Icon.Home color="#FF743C" size={24} />
            //                 <span className="mont-subhead colored-text">Home</span>
            //             </div>

            //             <div>
            //                 <Icon.Home color="#FF743C" size={24} />
            //                 <span className="mont-subhead colored-text">Home</span>
            //             </div>
                        
            //         </Col>
            //     </Row>
            // </Container>
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
                // Add your code here
            }}
>
        <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <Icon.Home color="#FF743C" size={24} />
                    </NavIcon>
                    <NavText>
                        <span className="mont-subhead colored-text">Home</span>
                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <Icon.Home color="#FF743C" size={24} />
                    </NavIcon>
                    <NavText>
                        <span className="mont-subhead colored-text">Plans</span>
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        )
    }
}