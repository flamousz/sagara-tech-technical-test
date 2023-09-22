import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes, postNotes } from "../../store/action/actionNote";
import { toast } from "react-toastify";

export default function TaskForm() {
	const notes = useSelector((state) => state.notesReducer.notes);
	const dispatch = useDispatch();
    let id = 0
	console.log(notes.length, "<<<notes.length DI TASKFORM");
    if (notes.length === 0 ) {
        id = 0
    } else if (notes.length === 1) {
        id = notes.length+1
    } else {
        id = notes.length+1

    }
    // let id = notes.length === 0 ? 0 : notes.length+1;
	const initialValue = {
		id,
		name: "",
		status: "not completed",
	};

	const [inputForm, setInputForm] = useState(initialValue);

	const inputHandler = (e) => {
		let data = {
			...inputForm,
			[e.target.name]: e.target.value,
		};
		console.log("masuk ke inputHandler");
		setInputForm(data);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("masuk ke submitHandler");
		dispatch(postNotes(inputForm))
			.then(() => {
				setInputForm(initialValue);
			})
			.catch((err) => {
				toast.error(`${err.message}`);
			});
	};

	useEffect(() => {
		fetchNotes();
		console.log(inputForm, "<< input form di formnote");
	}, [inputForm]);

	return (
		<>
			<form onSubmit={submitHandler}>
				<button type='submit'>click me</button>
				<label htmlFor='name'>name:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={inputForm.name}
					onChange={inputHandler}
				/>
			</form>
		</>
	);
}
