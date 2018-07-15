const initialState={
	day: 'monday',
	location:'san diego'
}

const Reducer = (state=initialState, action) =>{
	switch(action.type){
		case 'SET_DAY': return Object.assign({}, state, {
			day: action.day
		})
		default: return state;
	}

	 
}

export default Reducer;