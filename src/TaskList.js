import React, { Component } from "react";
import "./TaskList.css";

class TaskList extends Component {
  render() {
    const { tasks, toggleTaskCompletion } = this.props;
    return (
      <div className="task-list">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <h4 className="taskName">{task.name}</h4>
            <p className="taskDescription">{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <button
              className="remove-button"
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default TaskList;
