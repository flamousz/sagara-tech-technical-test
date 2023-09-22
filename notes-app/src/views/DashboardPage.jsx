import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../store/action/actionNote";
import FormNote from "../components/FormNote";

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
			<h1>dari dashboard</h1>
			<FormNote />
			{notes.map((en) => {
				return (
					<>
						<div style={{display: 'flex', flexDirection: 'row', gap: '2em'}}>
							<h3>{en.name}</h3>
							<h3>{en.status}</h3>
						</div>
					</>
				);
			})}
		</>
	);
}
