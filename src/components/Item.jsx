import Button from "./Button";
import { FaTrash } from "react-icons/fa";

const Item = (props) => {
  const deleteItem = (id) => {
    const copy = props.list.fiter((el) => el.id !== id);
    props.setList(copy);
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        id={props.id}
        value={props.value}
        onClick={() => {
          const copy = [...props.list];
          const item = copy.find((el) => el.id === props.id);
          if (item) {
            item.isDone = !item.isDone;
            props.setList(copy);
          }
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
