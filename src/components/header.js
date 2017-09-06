import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Navbar from "react-bootstrap/lib/NavbarHeader";
import Nav from "react-bootstrap/lib/NavbarHeader";
import NavItem from "react-bootstrap/lib/NavItem";
import NavDropdown  from 'react-bootstrap/lib/NavDropdown';
import MenuItem  from 'react-bootstrap/lib/MenuItem';

class Header extends Component{

	render()
	{
		return(
			<div>
				<Navbar>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">React-Bootstrap</a>
				      </Navbar.Brand>
				    </Navbar.Header>
				    <Nav>
				      <NavItem eventKey={1} href="#">Link</NavItem>
				      <NavItem eventKey={2} href="#">Link</NavItem>
				    </Nav>
				  </Navbar>
			</div>
		);
	}

}

export default connect(null)(Header);