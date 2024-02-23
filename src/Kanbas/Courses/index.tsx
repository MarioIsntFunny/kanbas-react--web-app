import { courses } from "../../Kanbas/Database";
import { Link, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import {
	FaBook,
	FaChevronDown,
	FaChevronRight,
	FaCross,
	FaPlus,
	FaRegCalendarAlt,
	FaRegUserCircle,
	FaTachometerAlt,
} from "react-icons/fa";
import CourseNavigation from "./Navigation";
import RoutesComponent from "./Navigation/Routes";
import { useState } from "react";

function Courses() {
	const { courseId } = useParams();
	const location = useLocation();
	const selectedScreen = location.pathname.split("/").pop();
	const course = courses.find((course) => course._id === courseId);
	const [kanbasNavigationMenuOpen, setKanbasNavigationMenuOpen] =
		useState(false);
	const [courseNavigationMenuOpen, setCourseNavigationMenuOpen] =
		useState(false);

	const toggleKanbasNavigationMenu = () => {
		setKanbasNavigationMenuOpen(!kanbasNavigationMenuOpen);
	};

	const toggleCourseNavigationMenu = () => {
		setCourseNavigationMenuOpen(!courseNavigationMenuOpen);
	};

	const loadCourseNavigation = () => {
		const courseLinks = [
			"Home",
			"Modules",
			"Piazza",
			"Grades",
			"Assignments",
		];

		return (
			<ul className="wd-navigation-small">
				{courseLinks.map((link, index) => (
					<li key={index}>
						<Link to={link}>{link}</Link>
					</li>
				))}
			</ul>
		);
	};

	const loadMenuOrCourse = () => {
		if (!kanbasNavigationMenuOpen) {
			return (
				<div>
					<div className="d-flex justify-content-between align-items-center wd-small-header">
						<div className="wd-header-content">
							<button className="wd-header-button">
								<HiMiniBars3
									size={"30px"}
									onClick={toggleKanbasNavigationMenu}
								/>
							</button>
						</div>
						<div className="wd-header-content">
							<h1>{course?._id + " " + course?.name}</h1>
						</div>
						<div className="wd-header-content">
							<button className="wd-header-button">
								<FaChevronDown
									size={"30px"}
									onClick={toggleCourseNavigationMenu}
								/>
							</button>
						</div>
					</div>
					{courseNavigationMenuOpen && loadCourseNavigation()}

					<RoutesComponent />
				</div>
			);
		} else {
			const links = [
				{
					label: "Kanbas",
					icon: <>N</>,
				},
				{
					label: "Account",
					icon: <FaRegUserCircle className="fs-2" />,
				},
				{
					label: "Dashboard",
					icon: <FaTachometerAlt className="fs-2" />,
				},
				{ label: "Courses", icon: <FaBook className="fs-2" /> },
				{
					label: "Calendar",
					icon: <FaRegCalendarAlt className="fs-2" />,
				},
			];
			return (
				<div style={{ width: "100vw" }}>
					<div style={{ float: "inline-end" }}>
						<button
							className="wd-button-style"
							onClick={toggleKanbasNavigationMenu}
						>
							<FaPlus style={{ transform: "rotate(45deg)" }} />
						</button>
					</div>
					<ul className="wd-kanbas-navigation-small">
						{links.map((link, index) => (
							<li key={index}>
								<Link to={`/Kanbas/${link.label}`}>
									<div>
										{link.icon} {link.label}
									</div>
									<div>
										<FaChevronRight size={20} />
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			);
		}
	};

	return (
		<div>
			<div className="d-none d-md-block">
				<h1 className="wd-course-header">
					<HiMiniBars3 style={{ marginRight: "20px" }} /> Course{" "}
					{course?.name}
					{
						<span className="wd-course-screen-selected">
							{" > "} {selectedScreen}
						</span>
					}
					<hr />
				</h1>
				<CourseNavigation />
			</div>
			<div>
				<div className="d-block d-md-none">{loadMenuOrCourse()}</div>
				<div className="d-none d-md-block">
					<div
						className="overflow-y-scroll position-fixed bottom-0 end-0"
						style={{ left: "320px", top: "70px" }}
					>
						<RoutesComponent />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Courses;
