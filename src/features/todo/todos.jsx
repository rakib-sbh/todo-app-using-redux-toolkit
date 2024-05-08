import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  changeInputBox,
  clearInputBox,
  deleteTodo,
  editTodo,
  placeTodo,
  toggleStatus,
} from "./todoSlice";
import Todo from "../../components/todo";
import Button from "../../components/button";
import Input from "../../components/input";

const Todos = () => {
  const { inputBox, todos } = useSelector((state) => state.todoReducer);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(changeInputBox(e.target.value));
  };

  const handleAddTodo = () => {
    dispatch(addTodo());
    dispatch(clearInputBox());
  };

  const handleCheckboxChange = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(placeTodo(id));
  };

  const handleCancelUpdate = () => {
    dispatch(clearInputBox());
  };

  const handleUpdateTodo = () => {
    dispatch(editTodo());
    dispatch(clearInputBox());
  };

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo App</h1>
      <div className="input-container">
        <Input
          type={"text"}
          value={inputBox.text}
          handler={handleInputChange}
          classname="input-field"
        />
        {inputBox.buttonText === "add" ? (
          <Button handler={handleAddTodo}>ADD</Button>
        ) : (
          <>
            <Button handler={handleUpdateTodo}>Update</Button>{" "}
            <Button handler={handleCancelUpdate}>Cancel</Button>{" "}
          </>
        )}
      </div>
      <section className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            data={{
              todo,
              inputBox,
              handleCheckboxChange,
              handleEdit,
              handleDelete,
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default Todos;
