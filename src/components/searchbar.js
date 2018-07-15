import React from 'react';
import {connect} from 'react-redux'
import Geosuggest from 'react-geosuggest';
import {withRouter} from 'react-router-dom';



export  function SearchBar(props){
	const handleSubmit=function(path,day){
		console.log('handle submit ran');
		navToNewPage(path);
	}

	const navToNewPage=function(path){
		console.log('nav to new page ran');
		props.history.push(path);
	}
	


		return(
			<div className="">
				
					<Geosuggest placeholder="Search places"  />
					<button onClick={()=>handleSubmit(props.day)} >Find</button>
				
			</div>
		)
	}
	


const mapStateToProps = (state, props) => (
	{
		day: state.day
	}
);

export default withRouter(connect(mapStateToProps)(SearchBar))
