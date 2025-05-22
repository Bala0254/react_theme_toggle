import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdateTask = () => {
    if (!input.trim()) return;

    if (editIndex !== null) {
      // Update the task
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? input : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add a new task
      setTasks([...tasks, input]);
    }

    setInput("");
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
    if (editIndex === index) {
      setInput("");
      setEditIndex(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2>To-Do List</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          placeholder="Enter task..."
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddOrUpdateTask} style={styles.button}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.task}>
            <span>{task}</span>
            <div>
              <button onClick={() => handleEdit(index)} style={styles.editBtn}>Edit</button>
              <button onClick={() => handleDelete(index)} style={styles.deleteBtn}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 💅 Basic Inline Styles
const styles = {
  container: {
    maxWidth: 400,
    margin: "50px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 8,
    textAlign: "center"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20
  },
  input: {
    flex: 1,
    padding: 8,
    marginRight: 10
  },
  button: {
    padding: "8px 16px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 4
  },
  list: {
    listStyleType: "none",
    padding: 0
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #eee"
  },
  editBtn: {
    marginRight: 8,
    padding: "4px 8px",
    background: "#ffc107",
    border: "none",
    borderRadius: 4
  },
  deleteBtn: {
    padding: "4px 8px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: 4
  }
};

export default TodoApp;
