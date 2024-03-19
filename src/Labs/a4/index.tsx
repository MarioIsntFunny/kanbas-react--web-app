import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
function Assignment4() {
	function sayHello() {
		alert("Hello");
	}
	return (
		<div>
			<h1>Assignment 4</h1>
			<ReduxExamples />
			<PassingFunctions theFunction={sayHello} />
			<Counter />
			<BooleanStateVariables />
			<StringStateVariables />
			<DateStateVariable />
			<ObjectStateVariable />
			<ArrayStateVariable />
			<ParentStateComponent />
		</div>
	);
}
export default Assignment4;
