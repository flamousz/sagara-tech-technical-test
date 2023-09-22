import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNotes, postNotes, putNotes } from "../store/action/actionNote";
import { toast } from "react-toastify";

export default function FormNote() {
	const dispatch = useDispatch();
	const initialValue = {
        id: '',
		name: "",
		status: "",
	};

	const [inputForm, setInputForm] = useState(initialValue);

	const inputHandler = (e) => {
		let data = {
			...inputForm,
			[e.target.name]: e.target.value,
		};
        console.log('masuk ke inputHandler');
		setInputForm(data);
	};
    
	const submitHandler = (e) => {
        e.preventDefault();
        
        console.log('masuk ke submitHandler');
		dispatch(postNotes(inputForm))
			.then(() => {
				setInputForm(initialValue);
			})
			.catch((err) => {
				toast.error(`${err.message}`);
			});
	};

   
    
	useEffect(() => {
        console.log(inputForm, '<< input form di formnote');
    }, [inputForm]);
    

	return (
		<>
			<h1>dari FormNote</h1>
			<form
				onSubmit={submitHandler}
				style={{
					display: "flex",
					flexDirection: "column",
					border: "2px solid black",
				}}
			>
				<label htmlFor='name'>name:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={inputForm.name}
					onChange={inputHandler}
				/>
				<label htmlFor='status'>status:</label>
				<input
					type='text'
					name='status'
					id='status'
					value={inputForm.status}
					onChange={inputHandler}
				/>
				<button type='submit'>click me</button>
			</form>
            <button type="button" onClick={
                (e) => {
                    dispatch(deleteNotes(2))
                        .then (data => {
                            toast.success('deleted')
                        })
                        .catch((err) => {
                            toast.error(`${err.message}`)
                        })
                }
            }>delete bos</button>
            <button type="button" onClick={
                (e) => {
                    dispatch(putNotes({id: 2, name: 'WALAH MAS diganti', status: 'COMPLETED BOS'}))
                        .then (data => {
                            toast.success('edited')
                        })
                        .catch((err) => {
                            toast.error(`${err.message}`)
                        })
                }
            }>edit bos no 2</button>
		</>
	);
}
