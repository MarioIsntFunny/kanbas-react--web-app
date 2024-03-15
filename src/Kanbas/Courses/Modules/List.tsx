import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
	const { courseId } = useParams();
	const modulesList = modules.filter((module) => module.course === courseId);
	const [selectedModule, setSelectedModule] = useState(modulesList[0]);
	
	return (
		<div className="flex-fill">
			<div className="float-end wd-buttons">
				<button className="wd-button-style">Collapse All</button>
				<button className="wd-button-style">View Progress</button>
				<button className="wd-button-style">
					<i className="fa fa-check-circle text-success"></i> Publish
					All
				</button>
				<button
					className="wd-button-style"
					style={{
						backgroundColor: "red",
						borderColor: "red",
						color: "white",
					}}
				>
					<FaPlus  /> Module
				</button>
				<button className="wd-button-style">
					<FaEllipsisV />
				</button>
			</div>
			<br />
			<br />
			<ul className="list-group wd-modules">
				{modulesList.map((module, index) => (
					<li
						key={index}
						className="list-group-item"
						onClick={() => setSelectedModule(module)}
					>
						<div>
							<FaEllipsisV className="me-2" />
							{module.name}
							<span className="float-end">
								<FaCheckCircle className="text-success" />
								<FaPlusCircle className="ms-2" />
								<FaEllipsisV className="ms-2" />
							</span>
						</div>
						{selectedModule._id === module._id && (
							<ul className="list-group">
								{module.lessons?.map((lesson, index) => (
									<li className="list-group-item" key={index}>
										<FaEllipsisV className="me-2" />
										{lesson.name}
										<span className="float-end">
											<FaCheckCircle className="text-success" />
											<FaEllipsisV className="ms-2" />
										</span>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
export default ModuleList;
