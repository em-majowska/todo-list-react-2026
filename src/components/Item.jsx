import { useState } from "react";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";

const Item = (props) => {
  const [done, setDone] = useState(false);

  const deleteItem = (index) => {
    const copy = [...props.list];
    copy.splice(index, 1);
    props.setList(copy);
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        id={props.id}
        value={props.value}
        onClick={() => setDone(!done)}
      />
      <label htmlFor={props.id} className={done ? "done" : ""}>
        {props.value}
      </label>
      <Button
        className="bin-btn"
        text={<FaTrash />}
        onClick={() => deleteItem(props.index)}
        list={props.list}
      />
    </div>
  );
};

export default Item;
