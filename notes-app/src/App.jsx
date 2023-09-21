import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

export default function App() {
	return (
		<Provider store={store}>
			<>
				<ToastContainer
					position='bottom-left'
					autoClose={1700}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
				<RouterProvider router={router} />
			</>
		</Provider>
	);
}
