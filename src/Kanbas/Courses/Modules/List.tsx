import React, { useEffect, useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules } from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";

function ModuleList() {
	const { courseId } = useParams();
	useEffect(() => {
		client.findModulesForCourse(courseId).then((modules) => dispatch(setModules(modules)));
	}, [courseId]);

	const handleUpdateModule = async () => {
		const status = await client.updateModule(module);
		dispatch(updateModule(module));
	};

	const handleAddModule = () => {
		client.createModule(courseId, module).then((module) => {
			dispatch(addModule(module));
		});
	};

	const handleDeleteModule = (moduleId: string) => {
		client.deleteModule(moduleId).then((status) => {
			dispatch(deleteModule(moduleId));
		});
	};

	const modulesList = modules.filter((module) => module.course === courseId);
	const [selectedModule, setSelectedModule] = useState(modulesList[0]);
	const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
	const module = useSelector((state: KanbasState) => state.modulesReducer.module);
	const dispatch = useDispatch();

	return (
		<div className="flex-fill">
			<div className="float-end wd-buttons">
				<button className="wd-button-style">Collapse All</button>
				<button className="wd-button-style">View Progress</button>
				<button className="wd-button-style">
					<i className="fa fa-check-circle text-success"></i> Publish All
				</button>
				<button
					className="wd-button-style"
					style={{
						backgroundColor: "red",
						borderColor: "red",
						color: "white",
					}}
					onClick={handleAddModule}
				>
					<FaPlus /> Module
				</button>
				<button className="wd-button-style">
					<FaEllipsisV />
				</button>
				<button className="wd-button-style" onClick={handleUpdateModule}>
					Update
				</button>
			</div>
			<br />
			<br />
			<ul className="list-group wd-modules">
				<li className="list-group-item">
					<input
						value={module.name}
						onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
					/>
					<textarea
						value={module.description}
						onChange={(e) =>
							dispatch(setModule({ ...module, description: e.target.value }))
						}
					/>
				</li>
				{moduleList
					.filter((module) => module.course === courseId)
					.map((module, index) => (
						<li
							key={index}
							className="list-group-item"
							onClick={() => setSelectedModule(module)}
						>
							<button onClick={() => dispatch(setModule(module))}>Edit</button>
							<button onClick={() => handleDeleteModule(module._id)}>
								Delete
							</button>
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
									{module.lessons?.map((lesson: any, index: any) => (
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
