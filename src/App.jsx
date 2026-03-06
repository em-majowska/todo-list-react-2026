import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [task, setTask] = useState("haha");
  const [list, setList] = useState([]);
  // TODO Ajouter un bouton permettant de passer d'un "light mode" à un "dark mode" (à vous de choisir les couleurs du dark mode)

  return (
    <>
      <Header text="Todo List" />
      <main className="container">
        {/* not done tasks */}
        {list.length > 0 && (
          <div className="tasks">
            {list
              .filter((el) => el.name.includes(task))
              .filter((el) => !el.isDone)
              .map((item, index) => {
                return (
                  <Item
                    key={`${index} ${item.name}`}
                    id={item.id}
                    value={item.name}
                    list={list}
                    setList={setList}
                    isDone={item.isDone}
                  />
                );
              })}
          </div>
        )}
        <form
          className="middle"
          onSubmit={(event) => {
            event.preventDefault();
            if (!task) return;

            const copy = [
              ...list,
              { name: task, isDone: false, id: Date.now() },
            ];
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
        {/* done tasks */}
        {list.length > 0 && (
          <div className="tasks">
            {list
              .filter((el) => el.isDone)
              .map((item, index) => {
                return (
                  <Item
                    key={`${index}${item.name}`}
                    id={item.id}
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
    </>
  );
}

export default App;
