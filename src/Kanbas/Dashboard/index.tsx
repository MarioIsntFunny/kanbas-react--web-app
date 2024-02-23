import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	FaClipboardList,
    FaBullhorn,
    FaComment
} from "react-icons/fa";

function Dashboard() {
	return (
		<div className="p-4">
			<h1>Dashboard</h1> <hr />
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
