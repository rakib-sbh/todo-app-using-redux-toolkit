import Input from "../components/input";
import Button from "../components/button";
import {
  DELETE_BUTTON_TEXT,
  EDIT_BUTTON_TEXT,
} from "../constants/todoConstant";

const Todo = ({ data }) => {
  const { todo, inputBox, handleDelete, handleCheckboxChange, handleEdit } =
    data;
  const { id, completed, text } = todo;

  return (
    <article className="todo-item">
      <Input
        type={"checkbox"}
        checked={completed ? true : false}
        handler={() => handleCheckboxChange(id)}
      />
      {completed ? (
        <span>
          <strike>{text}</strike>
        </span>
      ) : (
        <span>{text}</span>
      )}
      <Button
        handler={() => handleEdit(id)}
        className={"edit"}
        disabled={inputBox.id === id}
      >
        {EDIT_BUTTON_TEXT}
      </Button>
      <Button
        handler={() => handleDelete(id)}
        disabled={inputBox.id === id}
        className={"delete"}
      >
        {DELETE_BUTTON_TEXT}
      </Button>
    </article>
  );
};

export default Todo;
