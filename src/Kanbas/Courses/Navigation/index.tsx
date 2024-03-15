import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
	const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
	const { pathname } = useLocation();
	return (
		<div className="d-none d-md-block">
			<ul className="wd-navigation">
				{links.map((link, index) => (
					<li
						key={index}
						className={pathname.includes(link) ? "wd-active" : ""}
					>
						<Link to={link}>{link}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
export default CourseNavigation;
