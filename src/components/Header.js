import React, { Component } from 'react'
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    return (
        <div>
            <Navbar
                className="header"
                color="dark"
                dark
                expand="md"
                fixed="top"
                full="true"
            >
                <NavbarBrand href="/">
                    reactstrap
                </NavbarBrand>
                <NavbarToggler
                    className="me-2"
                    onClick={function noRefCheck() { }}
                />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/components/">
                                Components
                                    </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
          </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Options
          </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    Option 1
            </DropdownItem>
                                <DropdownItem>
                                    Option 2
            </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>
                        Simple Text
      </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}