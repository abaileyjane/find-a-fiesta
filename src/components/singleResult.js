import React from 'react';
import {connect} from 'react-redux';

export function SingleResult(props){
	return(
		<div>
			<h1>{props.name}</h1>
			<h2>{props.price}</h2>
			<h2>{props.rating}</h2>
			<h3>{props.review}</h3>
		</div>
			)
}

const mapStateToProps = (state, props)=> ({});

export default connect(mapStateToProps)(SingleResult);