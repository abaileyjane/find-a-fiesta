import React from 'react';
import {connect} from 'react-redux';

export function ResultsPage(props){
	return(
			<div>
				<p>Results</p>
			</div>
		)
}

const mapStateToProps = (state,props)=>({});

export default connect(mapStateToProps)(ResultsPage);