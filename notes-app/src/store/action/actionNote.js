import { toast } from "react-toastify";
import {
	IS_LOADING_FALSE,
	IS_LOADING_TRUE,
	NOTES_FETCH_DATA,
} from "./actionType";

export function fetchNotes() {
	return (dispatch) => {
		try {
			dispatch(loadingStart());

			const notesData = JSON.parse(localStorage.getItem("notes"));
			console.log(notesData, "<< ini notesData di action");
			if (!notesData) {
				let emptyArray = [];
				console.log(emptyArray, "masul di action");
				localStorage.setItem("notes", JSON.stringify(emptyArray));
			}

			dispatch({
				type: NOTES_FETCH_DATA,
				payload: notesData,
			});
		} catch (error) {
			toast.error("Notes failed to fetch");
		} finally {
			dispatch(loadingStop());
		}
	};
}

export function postNotes(input) {
	return async (dispatch) => {
		try {
			console.log(input,'<< ini input di POST ACTION NOTE');
			let notes = dataParser()
			notes.push(input);
			const totalNotesStringify = JSON.stringify(notes);
			console.log(
				typeof totalNotesStringify,
				"<< INPUT BERHASIL DI Stringify"
			);
			localStorage.setItem("notes", totalNotesStringify);
			console.log("<< INPUT MASUK KE LOCSTRGE");
			dispatch(fetchNotes());
		} catch (error) {
			toast.error("Notes failed to post");
		}
	};
}

export function deleteNotes(id) {
	return async (dispatch) => {
		try {
			console.log(id,'<< id di ACTION DELETE');
			let notes = dataParser();
			notes.splice(id, 1);
			const totalNotesStringify = JSON.stringify(notes);
			localStorage.setItem("notes", totalNotesStringify);
			dispatch(fetchNotes());
		} catch (error) {
			toast.error("Notes failed to delete");
		}
	};
}

export function putNotes(input) {
    return async (dispatch) => {
        try {
            console.log(input,'<< INPUT DI PUT ACTION');
            let notes = dataParser()
            notes[input.id] = {name: input.name, status: input.status}

			const totalNotesStringify = JSON.stringify(notes);
			localStorage.setItem("notes", totalNotesStringify);
			dispatch(fetchNotes());
        } catch (error) {
           toast.error('Note Failed to change') 
        }
    }
}

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

export function dataParser() {
	let totalNotes = [];
	const notesData = JSON.parse(localStorage.getItem("notes"));
	for (const note of notesData) {
		totalNotes.push(note);
	}

	return totalNotes;
}
