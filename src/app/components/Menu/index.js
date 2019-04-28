import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">FullStack Test</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Create Account</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/wallets">Wallets</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/logs">Logs</NavLink>
                        </NavItem>       
                    </Nav>
                </Collapse>
                </Navbar>
            </div>       
        );
    }
}