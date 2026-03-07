import axios from "axios";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";

const Item = (props) => {
  // check task as done
  const checkTask = async (id) => {
    try {
      await axios.put(`http://localhost:3000/todo/${id}`);
      const copy = [...props.list];
      const item = copy.find((el) => el._id === id);
      if (item) {
        item.isDone = !item.isDone;
        props.setList(copy);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // delete task button function
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      const copy = props.list.filter((item) => item._id !== id);
      props.setList(copy);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        id={props.id}
        value={props.value}
        onClick={() => {
          checkTask(props.id);
        }}
      />
      <label htmlFor={props.id} className={props.isDone ? "done" : ""}>
        {props.value}
      </label>
      <Button
        className="bin-btn"
        text={<FaTrash />}
        onClick={() => deleteItem(props.id)}
      />
    </div>
  );
};

export default Item;
