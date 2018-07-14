import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap'

export function SelectDayButton(props){
	return(
		<div className="{props.day}">
			<Button>{props.day}</Button>
		</div>
		)
}

const mapStateToProps = (state,props)=> ({});

export default connect(mapStateToProps)(SelectDayButton)