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
    }

    render() {
        
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
        <SideNav expanded={this.state.expanded}
            onToggle={(expanded) => {
                this.setState({ expanded });
            }}
            onSelect={(selected) => {
                // Add your code here
            }}
>
        <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Line Chart
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        )
    }
}