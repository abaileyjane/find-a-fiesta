const initialState={
	day: '',
	coordiates:{
		lat: 32.7,
		lng: -117.2
	},
	location:'san diego',
	sugg: false
}

const Reducer = (state=initialState, action) =>{
	switch(action.type){
		case 'SET_DAY': return Object.assign({}, state, {
			day: action.day
		})

		case 'SET_LOCATION': return Object.assign({}, state, {
			location: action.location
		})
		case 'SUGG_SELECT': return Object.assign({}, state, {
			sugg:true
		})
		case 'SUGG_DESELECT': return Object.assign({}, state, {
			sugg:false
		})
		default: return state;
	}

	 
}

export default Reducer;