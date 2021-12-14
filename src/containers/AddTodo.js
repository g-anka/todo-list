import { connect } from "react-redux";
import { AddTodo } from "../components/AddTodo";
import { addTodo } from "../actions/todos";
import { toggleCompletedVisibility} from "../actions/filter";

//const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
    toggleCompletedVisibility: () => dispatch(toggleCompletedVisibility()),
});

export default connect(null, mapDispatchToProps)(AddTodo);