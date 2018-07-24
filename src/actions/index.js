import {YELP_KEY} from '../variables.js'

export const SET_DAY = 'SET_DAY';
export const setDay = day => ({
	type: SET_DAY,
	day
})

export const SET_LOCATION = 'SET_LOCATION';
export const setLocation = location => ({
	type: SET_LOCATION,
	location
})

export const SUGG_SELECT = 'SUGG_SELECT';
export const suggSelect = sugg =>({
	type: SUGG_SELECT,
	sugg
})

export const SUGG_DESELECT = 'SUGG_DESELECT';
export const suggDeselect = sugg => ({
	type:SUGG_DESELECT,
	sugg
})
//API REQUEST ACTIONS
export const START_FETCH = 'START_FETCH';
export const startFetch = () => ({
	type: START_FETCH
})

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = () => ({
	type: FETCH_SUCCESS
})

export const FETCH_FAIL = 'FETCH_FAIL';
export const fetchFail = () =>({
	type: FETCH_FAIL
	
})

export const REQUEST_REVIEWS = 'REQUEST_REVIEWS';
export const requestReviews =(location, day) =>({
	type: REQUEST_REVIEWS,
	location,
	day
})

export const RECIEVE_REVIEWS = 'RECIEVE_REVIEWS';
export const recieveReviews = (json) => ({
	type: RECIEVE_REVIEWS,
	reviews: json.data.children.map(child=> child.data)
})

export function fetchReviews(location,day){
	return function (dispatch){
		dispatch(requestReviews(location, day))
		
		return fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&term=${day}`,{
			 "method": "GET",
			  "headers": {
			    "Content-Type": "application/json",
			    "Authorization": YELP_KEY,
						}
		})
			.then(
				response=>response.json,
				error=> console.log('This is the error', error))
			.then(json => dispatch(recieveReviews(json)))
	}
}