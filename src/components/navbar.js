import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import SearchBar from './searchbar.js';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setDay} from '../actions' 



export function NavBar(props){
	const handleSubmit=function(day){
		changeSelectedDay(day)
		navToNewPage(day);
	}

	const navToNewPage=function(path){
		props.history.push(path);
	}

	const changeSelectedDay=function(day){
		props.dispatch(setDay(day))
	}
	

	return(
			<Navbar className=''>
				<Navbar.Header>

					<h1><Link to ='/'>Find a Fiesta!</Link></h1>
				</Navbar.Header>
				<Nav pullRight>
					<Button className='' onClick={()=> handleSubmit('monday')}>Marg Monday</Button>
					<Button className='' onClick={()=>handleSubmit('tuesday')}>Taco Tuesday</Button>
					<SearchBar />
				</Nav>
			</Navbar>

		)
}

const mapStateToProps= (state)=>({
	day:state.day
});

export default withRouter(connect(mapStateToProps)(NavBar))