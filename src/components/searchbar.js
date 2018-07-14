import React from 'react';
import {connect} from 'react-redux'
import Geosuggest from 'react-geosuggest';

export class SearchBar extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="">
				<Geosuggest placeholder="Search places" queryDelay=0 />
			</div>
		)
	}
	
}

const mapStateToProps = (state,props) => ({});

export default connect(mapStateToProps)(SearchBar)
