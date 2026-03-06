const Input = (props) => {
  return (
    <input
      type="text"
      name="newTask"
      id="newTask"
      placeholder="new task"
      value={props.task}
      onChange={props.onChange}
    />
  );
};

export default Input;
