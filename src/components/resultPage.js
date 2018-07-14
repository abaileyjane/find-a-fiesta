import React from 'react';
import {connect} from 'react-redux';
import SingleResult from './singleResult.js'

export function ResultsPage(props){
	return(
			<div>
				<p>Results</p>
				<SingleResult name="Starbucks" price="cheap" rating="5 stars" review="hello everyone hello everyonehello everyonehello everyonehello everyone" />
			</div>
		)
}

const mapStateToProps = (state,props)=>({});

export default connect(mapStateToProps)(ResultsPage);