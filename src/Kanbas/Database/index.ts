import courses from "./courses";
import modules from "./modules";
import assignments from "./assignments";
import grades from "./grades";
import users from "./users";
import enrollments from "./enrollments";

const db = {
	courses: courses,
	modules: modules,
	assignments: assignments,
	grades: grades,
	users: users,
	enrollments: enrollments,
};

export { db, courses, modules, assignments, users, grades, enrollments };
