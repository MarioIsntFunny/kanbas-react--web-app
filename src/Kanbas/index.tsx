import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./Courses";
import { useState } from "react";
import { db } from "./Database";
import { Provider } from "react-redux";
import store from "./store";

function Kanbas() {
		const [courses, setCourses] = useState(db.courses);
		const [course, setCourse] = useState({
			_id: "0",
			name: "New Course",
			number: "New Number",
			startDate: "2023-09-10",
			endDate: "2023-12-15",
			image: "banner1.jpg",
		});

		const updateCourse = () => {
			setCourses(
				courses.map((c) => {
					if (c._id === course._id) {
						return course;
					} else {
						return c;
					}
				})
			);
		};

		const addNewCourse = () => {
			const newCourse = {
				...course,
				_id: new Date().getTime().toString(),
			};
			setCourses([...courses, { ...course, ...newCourse }]);
		};

		const deleteCourse = (courseId: string) => {
			setCourses(courses.filter((course) => course._id !== courseId));
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
					<Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
				</Routes>
			</div>
		</Provider>
	);
}

export default Kanbas;
