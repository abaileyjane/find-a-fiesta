import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import SearchBar from './searchbar.js';
import {Link} from 'react-router-dom'

function goToMonday(){
	window.location.href='/monday'
}

function goToTuesday(){
	window.location.href='tuesday'
}


export default function NavBar(props){
	return(
			<Navbar className=''>
				<Navbar.Header>

					<h1><Link to ='/'>Find a Fiesta!</Link></h1>
				</Navbar.Header>
				<Nav pullRight>
					<Button className='' onClick={()=> goToMonday()}>Marg Monday</Button>
					<Button className='' onClick={()=> goToTuesday()}>Taco Tuesday</Button>
					<SearchBar />
				</Nav>
			</Navbar>

		)
}