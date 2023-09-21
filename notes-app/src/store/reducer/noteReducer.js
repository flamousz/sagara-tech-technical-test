import { NOTES_FETCH_DATA } from "../action/actionType";

let initialState = {
	notes: [],
};

export default function notesReducer(state = initialState, action) {
	switch (action.type) {
		case NOTES_FETCH_DATA:
			return {
				...state,
				notes: action.payload,
			};

		default:
			return state;
	}
}
