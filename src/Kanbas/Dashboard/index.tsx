import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Database";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaClipboardList, FaBullhorn, FaComment } from "react-icons/fa";

function Dashboard({
	courses,
	course,
	setCourse,
	addNewCourse,
	deleteCourse,
	updateCourse,
}: {
	courses: any[];
	course: any;
	setCourse: (course: any) => void;
	addNewCourse: () => void;
	deleteCourse: (course: any) => void;
	updateCourse: () => void;
}) {

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setCourse((prevCourse: any) => ({
			...prevCourse,
			[name]: value,
		}));
	};

	return (
		<div className="p-4">
			<h1>Dashboard</h1> <hr />
			<h5>Course</h5>
			<input
				name="name"
				value={course.name}
				className="form-control"
				onChange={handleChange}
			/>
			<input
				name="number"
				value={course.number}
				className="form-control"
				onChange={handleChange}
			/>
			<input
				name="startDate"
				value={course.startDate}
				className="form-control"
				type="date"
				onChange={handleChange}
			/>
			<input
				name="endDate"
				value={course.endDate}
				className="form-control"
				type="date"
				onChange={handleChange}
			/>
			<button onClick={addNewCourse}>Add</button>
			<button onClick={updateCourse}>Update</button>
			<h2>Published Courses (7)</h2> <hr />
			<div className="row">
				<div className="row row-cols-1 row-cols-md-4 row-cols-sm-3 g-4">
					{courses.map((course) => (
						<div
							key={course._id}
							className="col"
							style={{ width: 300 }}
						>
							<div className="card">
								<img
									src={`/images/${course.image}`}
									className="card-img-top"
									style={{ height: 150 }}
									alt=""
								/>
								<div className="card-body">
									<Link
										className="card-title"
										to={`/Kanbas/Courses/${course._id}/Home`}
										style={{
											textDecoration: "none",
											color: "red",
											fontWeight: "bold",
										}}
									>
										<button
											onClick={(event) => {
												event.preventDefault();
												setCourse(course);
											}}
										>
											Edit
										</button>

										<button
											onClick={(event) => {
												event.preventDefault();
												deleteCourse(course._id);
											}}
										>
											Delete
										</button>
										{course._id + " " + course.name}
									</Link>
									<p className="card-text">
										{course.startDate.split("-").join("") +
											" " +
											course.name}
									</p>
									<Link
										to={`/Kanbas/Courses/${course._id}/Home`}
									>
										<FaClipboardList
											size="25px"
											className="wd-icon-button"
										/>
									</Link>
									<Link
										to={`/Kanbas/Courses/${course._id}/Home`}
									>
										<FaBullhorn
											size="25px"
											className="wd-icon-button"
										/>
									</Link>
									<Link
										to={`/Kanbas/Courses/${course._id}/Home`}
									>
										<FaComment
											size="25px"
											className="wd-icon-button"
										/>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
