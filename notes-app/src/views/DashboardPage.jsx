import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../store/action/actionNote";
import FormNote from "../components/FormNote";
import Header from "../components/Dashboard/Header";
import TaskList from "../components/Dashboard/Tasklist/TaskList";
import TaskForm from "../components/Dashboard/TaskForm";

export default function DashboardPage() {
	const notes = useSelector((state) => state.notesReducer.notes);
	const { isLoading } = useSelector((state) => state.loadingReducer);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchNotes());
	}, []);

	console.log(notes, "<<notes di view dashboard");
	return (
		<>
			<main className="container">
				<Header />
				<TaskList status={'notcomplete'}/>
				<TaskList status={'completed'}/>
				<TaskForm />
				{/* <FormNote/> */}
			</main>
		</>
	);
}
