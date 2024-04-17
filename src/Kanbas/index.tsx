import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

function Kanbas() {
	const [courses, setCourses] = useState<any[]>([]);
	const [course, setCourse] = useState({
		_id: "0",
		name: "New Course",
		number: "New Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
		image: "banner1.jpg",
	});
	const API_BASE = process.env.REACT_APP_API_BASE;
	const COURSES_API = `${API_BASE}/api/courses`;
	console.log(COURSES_API)
	const findAllCourses = async () => {
		const response = await axios.get(COURSES_API);
		setCourses(response.data);
	};

	useEffect(() => {
		findAllCourses();
	}, []);

	const updateCourse = async () => {
		const response = await axios.put(`${COURSES_API}/${course._id}`, course);
		setCourses(
			courses.map((c) => {
				if (c._id === course._id) {
					return course;
				}
				return c;
			})
		);
	};

	const addNewCourse = async () => {
		const response = await axios.post(COURSES_API, course);
		setCourses([...courses, response.data]);
	};

	const deleteCourse = async (courseId: string) => {
		const response = await axios.delete(`${COURSES_API}/${courseId}`);
		setCourses(courses.filter((c) => c._id !== courseId));
	};

	return (
		<Provider store={store}>
			<div className="d-flex">
				<div className="d-none d-md-block">
					<KanbasNavigation />
				</div>
				<Routes>
					<Route path="/" element={<Navigate to="Dashboard" />} />
					<Route path="Account" element={<h1>Account</h1>} />
					<Route
						path="Dashboard"
						element={
							<Dashboard
								courses={courses}
								course={course}
								setCourse={setCourse}
								addNewCourse={addNewCourse}
								deleteCourse={deleteCourse}
								updateCourse={updateCourse}
							/>
						}
					/>
					<Route path="Courses/:courseId/*" element={<Courses/>} />
				</Routes>
			</div>
		</Provider>
	);
}

export default Kanbas;
