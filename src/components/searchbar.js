import React from 'react';
import {connect} from 'react-redux'
import Geosuggest from 'react-geosuggest';
import {withRouter} from 'react-router-dom';
import {setLocation} from '../actions';


export  function SearchBar(props){
	const handleSubmit=function(path,day){
		console.log('handle submit ran');
		navToNewPage(path);
	}

	const navToNewPage=function(path){
		console.log('nav to new page ran', props.location);
		props.history.push(path);

	}

	const changeLocation=function(value){
		console.log('changeLocation ran', props.location);
		props.dispatch(setLocation(value))

	}


	const changeLocationSuggest=function(suggest){
		try {
			console.log('changeLocationSuggest')
			props.dispatch(setLocation(suggest.label));
		}
		catch(error){
			console.log(error)
		}
	}

	const noResult = function(input){
		console.log('Hmmm. . . We are not sure where', input, 'is.')
	}
	
		return(
			<div className="">
				
					<Geosuggest placeholder="Search places" onSuggestNoResults={noResult} onChange={changeLocation} onSuggestSelect={changeLocationSuggest} />
					<button onClick={()=>handleSubmit(props.day)} >Find</button>
				
			</div>
		)
	}
	


const mapStateToProps = (state, props) => (
	{
		day: state.day,
		location: state.location
	}
);

export default withRouter(connect(mapStateToProps)(SearchBar))
