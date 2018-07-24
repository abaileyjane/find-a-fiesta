import {combineReducers} from 'redux';

const Reducer = combineReducers({
	settings,
	ajaxRequest
})

const initialState={
	day: '',
	location:'',
	sugg: false,
	reviewsByDay:{
		monday: {
			isFetching: false,
			items:[]
		},

		tuesday: {
			isFetching: false,
			items: []
		}
	},
	error: false,
}

function settings(state=[], action){
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
		default: return state
	}
}

function ajaxRequest(
	state=[], 
	action
) {
	switch(action.type){
		case 'START_FETCH': return {
			...state,
			reviewsByDay:{
				...state.reviewsByDay,
				monday:{
					...state.reviewsByDay.monday,
					isFetching: true
				},
				tuesday:{
					...state.reviewsByDay.tuesday,
					isFetching: true
				}
			}
		}

		case 'FETCH_SUCCESS':  return {
			...state,
			reviewsByDay:{
				monday:{
					items:[],
					isFetching: false
				},
				tuesday:{
					items:[],
					isFetching: false
				}
			},
			error: false
		}

		case 'FETCH_FAIL': return {
			...state,
			reviewsByDay:{
				...state.reviewsByDay,
				monday:{
					...state.reviewsByDay.monday,
					isFetching: false
				},
				tuesday:{
					...state.reviewsByDay.tuesday,
					isFetching: false
				}
			},
			error: true
		}

		case 'REQUEST_REVIEWS':
		case 'RECIEVE_REVIEWS':

		default: return state;
	}

	 
}

export default Reducer;