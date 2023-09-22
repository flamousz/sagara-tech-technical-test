import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../../../store/action/actionNote";
import Task from "./Task";

export default function TaskList({ status }) {
	const notes = useSelector((state) => state.notesReducer.notes);
	const dispatch = useDispatch();

	const completedNotes = notes.filter((obj) => obj.status === "completed");
	const notCompletedNotes = notes.filter(
		(obj) => obj.status === "not completed"
	);


	console.log(status, "<<<<<<<<<<<<STATUS DARI TASKLIST");
	useEffect(() => {
		dispatch(fetchNotes());
	}, []);

	return (
		<>
			<section className='tasklist'>
				{status === "completed" ? (
					<>
						{completedNotes.map((note, index) => {
							return <Task key={index} note={note} index={index} />;
						})}
					</>
				) : (
					<>
						{notCompletedNotes.map((note, index) => {
							return <Task key={index} note={note} index={index} />;
						})}
					</>
				)}
			</section>
		</>
	);
}
