import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar} from "react-bootstrap";
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';

class Header extends Component{

	render()
	{
		return(
			<div>
				<Navbar>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">DentistApp</a>
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