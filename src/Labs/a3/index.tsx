import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";


function Assignment3() {
	return (
		<div>
			<h1>Assignment 3</h1>

			<ConditionalOutput />
			<Styles />
			<Classes />
			<PathParameters />
			<JavaScript />
			<Highlight>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Aspernatur, mollitia eveniet? Excepturi fugiat quibusdam in aut
				quod repudiandae velit delectus dignissimos distinctio nobis?
				Blanditiis error ut enim esse! Quaerat, repellat?
			</Highlight>
			<Add a={3} b={4} />
			<TodoList></TodoList>
		</div>
	);
}
export default Assignment3;
