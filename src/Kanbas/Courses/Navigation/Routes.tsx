import { Routes, Route, Navigate } from "react-router";
import Assignments from "../Assignments";
import Home from "../Home";
import Modules from "../Modules";

function RoutesComponent() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Navigate to="Home" />} />
				<Route path="Home" element={<Home />} />
				<Route path="Modules" element={<Modules />} />
				<Route path="Piazza" element={<h1>Piazza</h1>} />
				<Route path="Assignments" element={<Assignments />} />
				<Route
					path="Assignments/:assignmentId"
					element={<h1>Assignment Editor</h1>}
				/>
				<Route path="Grades" element={<h1>Grades</h1>} />
			</Routes>
		</div>
	);
}

export default RoutesComponent;
