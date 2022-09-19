import { useEffect, useState } from "react";
import laptop from "./assets/laptop.png";

function App() {
  // States

  // const [allTasks, setAllTasks] = useState([]);
  const [allTasks, setAllTasks] = useState(() => {
    const savedTasks = localStorage.getItem("myTasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });
  const [task, setTask] = useState("");

  // Functions

  // Input Function
  const handleInput = (e) => {
    setTask(e.target.value);
  };

  // Add Task Function
  const formSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      setAllTasks([...allTasks]);
    } else {
      alert("Task Added");
      setAllTasks([
        ...allTasks,
        { id: allTasks.length + 1, taskName: task.trim() },
      ]);
      setTask("");
    }
  };
  console.log("all tasks", allTasks);

  // Delete Task Function
  const deleteTask = (id) => {
    const removeTask = allTasks.filter((task) => {
      return task.id !== id;
    });
    setAllTasks(removeTask);
  };

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(allTasks));
  }, [allTasks]);

  return (
    <>
      <div className="App">
        <section className="container">
          <div className="heading">
            <img className="heading__img" src={laptop} />
            <h1 className="heading__title">Task Manager</h1>
          </div>
          <form className="form" onSubmit={formSubmit}>
            <div style={{ textAlign: "center" }}>
              <label className="form__label" htmlFor="todo">
                ~ My Tasks ~
              </label>
              <input
                value={task}
                onChange={handleInput}
                placeholder="Add Task"
                className="form__input"
                type="text"
                id="todo"
                name="to-do"
                size={30}
              />
              <button className="button" type="submit">
                <span>Add Task</span>
              </button>
            </div>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "baseline",
            }}
          >
            <p style={{ marginBottom: "0px" }}>My Tasks:</p>
            <button
              className="button"
              style={{ marginBottom: "0px", display: "inline", height: "26px" }}
            >
              <span style={{ padding: "0.5rem 0.4rem" }}>Veiw All Tasks</span>
            </button>
          </div>
          <div
            className="to_do_List"
            style={{
              marginTop: "1rem",
              maxHeight: "350px",
              overflowY: "scroll",
              minHeight: "220px",
              zIndex: "1",
            }}
          >
            {allTasks.map((task, id) => (
              <ul key={id} className="toDoList">
                <li style={{ width: "65%", display: "inline-block" }}>
                  <span>{id + 1} )</span> {task.taskName}{" "}
                </li>
                <button onClick={() => deleteTask(task.id)} className="button">
                  <span>Dispose</span>
                </button>
              </ul>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
