import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./Courses";

function Kanbas() {
	return (
		<div className="d-flex">
			<div className="d-none d-md-block">
				<KanbasNavigation />
			</div>
			<Routes>
				<Route path="/" element={<Navigate to="Dashboard" />} />
				<Route path="Account" element={<h1>Account</h1>} />
				<Route path="Dashboard" element={<Dashboard />} />
				<Route path="Courses/:courseId/*" element={<Courses />} />
			</Routes>
		</div>
	);
}

export default Kanbas;
