import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import SearchBar from './searchbar.js';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


export function NavBar(props){
	const handleSubmit=function(path){
		console.log(path)
		props.history.push(path)
	}

	return(
			<Navbar className=''>
				<Navbar.Header>

					<h1><Link to ='/'>Find a Fiesta!</Link></h1>
				</Navbar.Header>
				<Nav pullRight>
					<Button className='' onClick={()=> handleSubmit(props.day)}>Marg Monday</Button>
					<Button className='' onClick={()=>handleSubmit(props.day)}>Taco Tuesday</Button>
					<SearchBar />
				</Nav>
			</Navbar>

		)
}

const mapStateToProps= (state)=>({
	day:state.day
});

export default withRouter(connect(mapStateToProps)(NavBar))