// TaskForm.js
import React, { Component } from "react";
import "./TaskForm.css"; // Import CSS styles

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      description: "",
      dueDate: "",
      color: "#007bff", // Default color
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleColorChange = (e) => {
    this.setState({ color: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { taskName, description, dueDate, color } = this.state;
    if (taskName && description && dueDate) {
      this.props.addTask({ name: taskName, description, dueDate, color });
      this.setState({
        taskName: "",
        description: "",
        dueDate: "",
        color: "#007bff", // Reset color to default
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  render() {
    const { taskName, description, dueDate, color } = this.state;
    return (
      <form className="task-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="taskName"
          value={taskName}
          onChange={this.handleChange}
          placeholder="Task Name"
          required
        />
        <textarea
          name="description"
          value={description}
          onChange={this.handleChange}
          placeholder="Description"
          rows={4}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={this.handleChange}
          required
        />

        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default TaskForm;
