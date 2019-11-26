import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactsptra";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Link } from "react-router-dom";
// import LogoBlock from "Components/Nav/LogoBlock";

import Button from "Components/Button/Button";

import logo from "Assets/landing/images/BhubLogo.svg";

export default class Navi extends React.Component {
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
      <div className={cn("navbar_container", align.full, "top")}>
        <Navbar className={cn(align.leftCenter, "nav_style")} dark expand="md">
          <NavbarBrand
            className={cn(align.leftCenter, "pl-5", align.noMarginPad)}
          >
            {/* <LogoBlock light /> */}
          </NavbarBrand>
          <NavbarToggler className="mr-3" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-5" navbar>
              <NavItem>
                <NavLink className={cn("nav_link")} href="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={cn("nav_link")} href="/">
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

/***
       * <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className={cn([styles.nav_link])} nav caret>
                  Products
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/authorized/dashboard">
                      EventFlow
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />

                </DropdownMenu>
              </UncontrolledDropdown>
       */
