import React, {Component} from 'react'; 
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
class NavbarReact extends Component{

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true,
          username: null,
          email: null,
          password: null
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

    handleChange=(e)=>{
        console.log(this.state)
        this.setState({
            [e.target.name]:e.target.value
         })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("FORM SUBMITTED")
         this.props.handleLogin(this.state)
    }
      render() {
        return (
          <div>
            <Navbar className = "Navbar" light>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <NavbarBrand href="/" className="mr-auto">Xapa</NavbarBrand>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem className="navItem">
                    <NavLink href="/about">about</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="/contact/">contact</NavLink>
                  </NavItem>
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

}
export default NavbarReact