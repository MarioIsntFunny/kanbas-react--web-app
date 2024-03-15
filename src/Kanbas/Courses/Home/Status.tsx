import "./index.css"
function Status() {
    const statusButtons = [
        "Import Existing Content",
        "Import from Commons",
        "Choose Home Page",
        "View Course Stream",
        "New Announcement",
        "New Analytics",
        "View Course Notifications"
    ]

    const toDo = [
		"Lecture CS4550.126131.202410 Sep 7",
		"Lecture CS4550.126131.202410 Sep 11",
		"Lecture CS4550.126131.202410 Sep 11"
	];

	return (
		<div
			className="flex-grow-0 me-2 d-none d-lg-block"
			style={{ width: "250px" }}
		>
			<h2>Course Status</h2>
			<hr></hr>

			<button className="wd-button-style">Publish</button>
			<button className="wd-button-style">Unpublish</button>
			<br />
			<hr></hr>

			<ul className="list-group" style={{ listStyle: "none" }}>
				{statusButtons.map((content, index) => (
					<li className="wd-button-style">{content}</li>
				))}
			</ul>
			<br />

			<h2>Coming Up</h2>
			<hr></hr>

			<ul className="list-group" style={{ listStyle: "none" }}>
				{toDo.map((content, index) => (
					<li className="wd-status-todo">{content}</li>
				))}
			</ul>
		</div>
	);
}

export default Status;
