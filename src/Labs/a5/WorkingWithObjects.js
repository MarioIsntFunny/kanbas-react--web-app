import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
	const API_BASE = process.env.REACT_APP_API_BASE;

	const [assignment, setAssignment] = useState({
		id: 1,
		title: "NodeJS Assignment",
		description: "Create a NodeJS server with ExpressJS",
		due: "2021-10-10",
		completed: "false",
		score: 0,
	});
	const [module, setModule] = useState({
		id: "SOME",
		name: "asdf",
		description: "fasd",
		course: "123",
	});
	const ASSIGNMENT_URL = API_BASE + "/a5/assignment";
	const MODULE_URL = API_BASE + "/a5/module";
	const fetchAssignment = async () => {
		const response = await axios.get(`${ASSIGNMENT_URL}`);
		setAssignment(response.data);
	};
	const updateTitle = async () => {
		const response = await axios.get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
		setAssignment(response.data);
	};
	useEffect(() => {
		fetchAssignment();
	}, []);

	return (
		<div>
			<h3>Working With Objects </h3>
			<h3>Modifying Properties Axios Part</h3>
			<input
				onChange={(e) =>
					setAssignment({
						...assignment,
						title: e.target.value,
					})
				}
				value={assignment.title}
				type="text"
			/>
			<button onClick={updateTitle}>Update Title to: {assignment.title}</button>
			<button onClick={fetchAssignment}>Fetch Assignment</button>
			<h4>Retrieving Objects</h4>
			<a href={API_BASE + "/a5/assignment"}>Get Assignment</a>
			<h4>Retrieving Properties</h4>
			<a href={API_BASE + "/a5/assignment/title"}>Get Title</a>
			<h4>Modifying Properties Old WAY</h4>
			<a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>Update Title</a>
			<input
				type="text"
				onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
				value={assignment.title}
			/>
			<input
				type="number"
				onChange={(e) => setAssignment({ ...assignment, score: e.target.value })}
				value={assignment.score}
			/>
			<input
				type="checkbox"
				onChange={(e) => setAssignment({ ...assignment, completed: e.target.value })}
				value={assignment.completed}
			/>
			<a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>Update Score</a>
			<a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>Update Completed</a>

			<br></br>
			<br></br>
			<a href={API_BASE + "/a5/module"}>Get Module</a>
			<input
				type="text"
				onChange={(e) => setModule({ ...module, description: e.target.value })}
				value={module.description}
			/>
			<a href={`${MODULE_URL}/description/${module.description}`}>
				Update Description Module
			</a>
		</div>
	);
}
export default WorkingWithObjects;
