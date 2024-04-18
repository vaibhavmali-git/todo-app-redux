import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions";
import { FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

// Component for displaying individual todo item
const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <div className="task-info">
        <span>{index + 1}.</span>
        <span className={`task-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      </div>
      <div className="task-buttons">
        <button
          className="remove-todo"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="check-todo"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="check-todo"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
