import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import DashboardPage from "../views/DashboardPage";
import CompletedNotePage from "../views/CompletedNotePage";

const router = createBrowserRouter([
	{
		element: <BaseLayout />,
		children: [
			{
				element: <DashboardPage />,
				path: "/",
			},
			{
				path: "/note",
				children: [
					{
						element: <CompletedNotePage />,
						path: "complete",
					},
				],
			},
		],
	},
]);

export default router;
