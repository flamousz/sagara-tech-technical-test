import { toast } from "react-toastify";
import {
	IS_LOADING_FALSE,
	IS_LOADING_TRUE,
	NOTES_FETCH_DATA,
} from "./actionType";

export function loadingStart() {
	return {
		type: IS_LOADING_TRUE,
	};
}

export function loadingStop() {
	return {
		type: IS_LOADING_FALSE,
	};
}

export function fetchNotes() {
	return (dispatch) => {
		try {
			dispatch(loadingStart());
			const notesData = localStorage.getItem("notes");
			const notesDataParsed = JSON.parse(notesData);

			dispatch({
				type: NOTES_FETCH_DATA,
				payload: notesDataParsed,
			});
		} catch (error) {
			toast.error("Notes cannot fetched");
		} finally {
			dispatch(loadingStop());
		}
	};
}

export function postNotes(input) {
	return (dispatch) => {
        try {
            const inputStringify = JSON.stringify(input)

            localStorage.setItem('notes', inputStringify)
            dispatch(fetchNotes())
        } catch (error) {
            toast.error("Notes failed to post")
        }
    };
}
