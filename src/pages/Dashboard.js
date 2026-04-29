import { useEffect, useState } from "react";
import API from "../services/api";
import "./Dashboard.css";

function Dashboard({ setUser }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch tasks");
    }
  };

  const addTask = async () => {
    if (!title.trim()) {
      alert("Task cannot be empty");
      return;
    }

    try {
      await API.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.log(err);
      alert("Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
      alert("Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="Dashboard-container">
      <h1>TaskFlow - Manage Your Work Efficiently</h1>

      <h2>My Tasks</h2>

      <div className="input-container-add">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Your Task"
          className="main-input-container"
        />

        <button
          onClick={addTask}
          className="add-btn"
          disabled={!title.trim()}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="all-list-containers">
            <p className="all-tasks1">{task.title}</p>

            <button
              onClick={() => deleteTask(task.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))
      )}

      <button
        onClick={() => {
          localStorage.removeItem("token");
          setUser(false);
        }}
        className="button-logout"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;