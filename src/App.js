import React, { useEffect, useState } from "react";
import ShowQuote from "./ShowQuote";
import ToDos from "./ToDos";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  const [toDoData, setToDoData] = useState({});

  useEffect(() => {
    fetch("/dbToDos.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.toDos);
        setToDoData(data.toDos);
      });
  }, []);

  const [text, setText] = useState("");

  // Delete Task
  const deleteToDo = (id) => {
    setToDoData(toDoData.filter((toDo) => toDo.id !== id));
  };

  const addToDo = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a your ToDo");
      return;
    }
    //const toDosLength = toDoData.length;
    const toDosLength = Math.max.apply(
      Math,
      toDoData.map(function (o) {
        return o.id;
      })
    );
    const newId = toDosLength + 1;

    const data = {
      id: newId,
      text: text,
      done: false,
    };
    setToDoData([...toDoData, data]);
  };

  // Toggle Reminder
  const toggleDone = (id) => {
    const toDoToggle = toDoData.filter((toDo) => toDo.id === id);
    const updToDo = { ...toDoToggle[0], done: !toDoToggle[0].done };
    setToDoData(
      toDoData.map((toDo) =>
        toDo.id === id ? { ...toDo, done: updToDo.done } : toDo
      )
    );
  };

  return (
    <div className="app">
      <div className="app__body">
        <div className="app__bodyTop">
          <h1>My ToDo List</h1>
        </div>
        <div className="app__bodyQuote">
          <ShowQuote />
        </div>
        <div className="app__bodyInput">
          <form onSubmit={addToDo}>
            <input
              placeholder="Tell me anything ..."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </form>
        </div>
        <div>
          <>
            {toDoData.length > 0 ? (
              <ToDos
                toDos={toDoData}
                onDelete={deleteToDo}
                onToggle={toggleDone}
              />
            ) : (
              <div className="app__body">
                "No ToDos available. Now you can take a break or just add a new
                ToDo."
              </div>
            )}
          </>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
