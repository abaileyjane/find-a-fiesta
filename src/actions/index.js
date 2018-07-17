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