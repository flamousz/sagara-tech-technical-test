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
				let id = "0";
				console.log(emptyArray, "masul di action");
				localStorage.setItem("notes", JSON.stringify(emptyArray));
				localStorage.setItem("id", id);
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
			if (input.name === '') {
				throw new Error
			}
			let id = JSON.parse(localStorage.getItem("id")) + 1;
			input.id = id;
			console.log(input, "<< ini input di POST ACTION NOTE");
			let notes = dataParser();
			notes.push(input);
			const totalNotesStringify = JSON.stringify(notes);
			console.log(
				typeof totalNotesStringify,
				"<< INPUT BERHASIL DI Stringify"
			);
			localStorage.setItem("notes", totalNotesStringify);
			localStorage.setItem("id", JSON.stringify(id));
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
			console.log(id, "<< id di ACTION DELETE");
			let notes = dataParser();
			let deletedNotes = notes.filter((note) => note.id !== id);
			const totalNotesStringify = JSON.stringify(deletedNotes);
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
			console.log(input, "<< INPUT DI PUT ACTION");
			let notes = dataParser();
			const taskMap = new Map();

			// Populate the map with tasks using their IDs as keys
			notes.forEach((task) => {
				taskMap.set(task.id, task);
			});

			// Update the task in the map based on the input
			if (taskMap.has(input.id)) {
				const updatedTask = taskMap.get(input.id);
				updatedTask.name = input.name;
				updatedTask.status = input.status;
				taskMap.set(input.id, updatedTask);
			}

			// Convert the map back to an array
			const updatedTasksArray = Array.from(taskMap.values());
			JSON.stringify(updatedTasksArray);
			localStorage.setItem("notes", JSON.stringify(updatedTasksArray));
			dispatch(fetchNotes());
		} catch (error) {
			toast.error("Note Failed to change");
		}
	};
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
