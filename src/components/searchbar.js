import React from 'react';
import {connect} from 'react-redux'
import Geosuggest from 'react-geosuggest';
import {withRouter} from 'react-router-dom';



export  function SearchBar(props){
	const handleSubmit=function(path){
		console.log(path)
		props.history.push(path)
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
