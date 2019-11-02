import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <img src ="https://bootstraplogos.com/wp-content/uploads/edd/2018/04/logo-3.png" width="50" height="50" alt="BusinessLogo"/> 
        <NavbarBrand href="/" className="mr-auto">xapa</NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
                  <NavItem className="navItem">
                    <NavLink href="/directory/new">New Business</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="/directory">Directory</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="https://github.com/adesegunadedeji">gitHub</NavLink>
                  </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;