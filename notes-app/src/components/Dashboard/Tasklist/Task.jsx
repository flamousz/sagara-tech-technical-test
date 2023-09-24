import { useDispatch } from "react-redux";
import { deleteNotes, putNotes } from "../../../store/action/actionNote";
import { toast } from "react-toastify";

export default function Task({ note, index }) {
	const dispatch = useDispatch();
	const initialValue = {
		name: "",
		status: "",
	};

	// onClick={(e) => {
	//     dispatch(deleteNotes(index))
	//         .then((data) => {
	//             toast.success("deleted");
	//         })
	//         .catch((err) => {
	//             toast.error(`${err.message}`);
	//         });
	// }}

	return (
		<ul>
			<li>
				{note.status === "not completed" ? (
					<>
						<button
							type='button'
							className='checkbox-round'
							onClick={(e) => {
								dispatch(
									putNotes({
										id: note.id,
										name: note.name,
										status: "completed",
									})
								)
									.then((data) => {
										toast.success("edited");
									})
									.catch((err) => {
										toast.error(`${err.message}`);
									});
							}}
						></button>
					</>
				) : (
					<></>
				)}
				<p>{note.name}</p>
			</li>
			<li>
				<p>{note.status}</p>
				<p>status</p>
			</li>
		</ul>
	);
}
