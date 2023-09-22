import { NOTES_FETCH_DATA } from "../action/actionType";

let initialState = {
	notes: [],
};

export default function notesReducer(state = initialState, action) {
	switch (action.type) {
		case NOTES_FETCH_DATA:
            console.log('MASUK KE REDUCER NOTE FETCH');
            console.log(state.notes, '<< ini state notes di reducer');
            console.log(action, '<< ini action di reducer');
			return {
				...state,
				notes: action.payload,
			}

		default:
			return state;
	}
}
