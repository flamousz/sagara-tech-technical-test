export default function Header() {
    const dateFormatter = () => {
        const event = new Date();
        const options = {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
        };
    
        return event.toLocaleDateString("en-AU", options);
    };



	return (
		<>
			<h1>Personal Notes</h1>
            <h3>{dateFormatter()}</h3>
		</>
	);
}
