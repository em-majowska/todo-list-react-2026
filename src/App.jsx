import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import Item from "./components/Item";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todo");
        setList(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!task) return;
    // create task
    const newTask = { name: task, isDone: false };
    // send to DB and update list state
    try {
      const response = await axios.post("http://localhost:3000/todo", newTask);
      const createdTask = response.data;

      setList((prev) => [...prev, createdTask]);
    } catch (error) {
      console.log(error.message);
    }
    // reset form and `search` value
    event.target.reset();
    setTask("");
  };

  return (
    <>
      {/* parent div responsible for light / dark mode */}
      <div className={darkMode ? "dark" : ""}>
        <Header
          text="Todo List"
          btnIcon={darkMode ? <FaRegLightbulb /> : <FaLightbulb />}
          onClick={() => setDarkMode(!darkMode)}
        />
        <main className="container">
          {/* not done tasks */}
          {list.length > 0 && (
            <div className="tasks">
              {list
                // sort by isDone
                .filter((item) => !item.isDone)
                // search while typing
                .filter((item) => item.name.includes(task))
                // populate with tasks
                .map((item) => {
                  return (
                    <Item
                      key={item._id}
                      id={item._id}
                      value={item.name}
                      list={list}
                      setList={setList}
                      isDone={item.isDone}
                    />
                  );
                })}
            </div>
          )}
          <form className="middle" onSubmit={() => handleSubmit(event)}>
            <Input
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
            <Button text="Add task" />
          </form>
          {/* done tasks */}
          {list.length > 0 && (
            <div className="tasks">
              {list
                .filter((item) => item.isDone)
                .map((item) => {
                  return (
                    <Item
                      key={item._id}
                      id={item._id}
                      value={item.name}
                      list={list}
                      setList={setList}
                      isDone={item.isDone}
                    />
                  );
                })}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
