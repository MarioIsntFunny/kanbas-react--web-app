import React from "react";
import {
	FaCheckCircle,
	FaEllipsisV,
	FaPlus,
	FaPlusCircle,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
	const { courseId } = useParams();
	const assignmentList = assignments.filter(
		(assignment) => assignment.course === courseId
	);
	return (
		<>
			<div className="wd-button-container">
				<input
					className="wd-button-style"
					placeholder="Search for Assignments"
					type="text"
				/>
				<button className="wd-button-style">
					<FaPlus/> Group
				</button>
				<button
					className="wd-button-style"
					style={{
						backgroundColor: "red",
						borderColor: "red",
						color: "white",
					}}
				>
					<FaPlus /> Assignment
				</button>
				<button className="wd-button-style">
					<FaEllipsisV />
				</button>
			</div>
			<hr></hr>
			<ul className="list-group wd-modules">
				<li className="list-group-item">
					<div style={{fontWeight:600, fontSize:20}}>
						<FaEllipsisV className="me-2" /> ASSIGNMENTS
						<span className="float-end">
							<FaCheckCircle className="text-success" />
							<FaPlusCircle className="ms-2" />
							<FaEllipsisV className="ms-2" />
						</span>
					</div>
					<ul className="list-group">
						{assignmentList.map((assignment, index) => (
							<li
								className="list-group-item"
								key={"assignment " + index}
								style={{borderLeftWidth:"5px"}}
							>
								<FaEllipsisV className="me-2" />
								<Link
									to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
								>
									{assignment.title}
								</Link>
								<span className="float-end">
									<FaCheckCircle className="text-success" />
									<FaEllipsisV className="ms-2" />
								</span>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</>
	);
}
export default Assignments;
