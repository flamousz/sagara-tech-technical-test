import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes, postNotes } from "../../store/action/actionNote";
import { toast } from "react-toastify";
import PlusButton from "../PlusButton";

export default function TaskForm() {
	const notes = useSelector((state) => state.notesReducer.notes);
	const dispatch = useDispatch();

	const initialValue = {
		name: "",
		status: "not completed",
	};

	console.log(initialValue,'<< ini initial value');

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
		console.log(inputForm, "<< input form di TASKFORM");
	}, [inputForm]);

	return (
		<>
			<form onSubmit={submitHandler}>
				<PlusButton/>
				<input
					type='text'
					name='name'
					id='name'
					placeholder="Insert the Task"
					value={inputForm.name}
					onChange={inputHandler}
				/>
			</form>
		</>
	);
}
