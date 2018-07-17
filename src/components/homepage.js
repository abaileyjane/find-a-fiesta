import React from 'react';
import {connect} from 'react-redux';
import SelectDayButton from './daySelectButton.js'
import SearchBar from './searchbar.js';
import {setDay} from '../actions';

export function Homepage(props){
	const toggleToMonday = function(){
		props.dispatch(setDay('monday'));
	}

	const toggleToTuesday = function(){
		props.dispatch(setDay('tuesday'));
	}
	return(
		<div>
			<section>
					<p>Find me a </p>
				<SelectDayButton day="Margarita Monday" onClick={toggleToMonday}/>
				<SelectDayButton day="Taco Tuesday" onClick={toggleToTuesday}/>
			</section>
			<section>
				<p>near</p>
				<SearchBar />
			</section>

		</div>
	)
}

const mapStateToProps = (state, props)=> ({});

export default connect(mapStateToProps)(Homepage);