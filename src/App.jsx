import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [task, setTask] = useState("haha");
  const [list, setList] = useState([]);

  return (
    <>
      <Header text="Todo List" />
      <main className="container">
        {list.length > 0 && (
          <div className="top">
            {list.map((item, index) => {
              return (
                <Item
                  key={`${index} ${item}`}
                  index={index}
                  value={item}
                  list={list}
                  setList={setList}
                />
              );
            })}
          </div>
        )}
        <form
          className="bottom"
          onSubmit={(event) => {
            event.preventDefault();
            if (!task) return;

            const copy = [...list, task];
            event.target.reset();
            setTask("");
            setList(copy);
          }}>
          <Input
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
          <Button text="Add task" />
        </form>
      </main>
      <Footer />
    </>
  );
}

export default App;
