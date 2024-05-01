import React, { Component } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./styles.css";
import backgroundImage from "./";

class App extends Component {
  state = {
    tasks: [],
  };

  addTask = (newTask) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { ...newTask, completed: false }],
    }));
  };

  toggleTaskCompletion = (index) => {
    this.setState((prevState) => {
      const updatedTasks = [...prevState.tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return { tasks: updatedTasks };
    });
  };

  render() {
    const { tasks } = this.state;
    const incompleteTasks = tasks.filter((task) => !task.completed);
    return (
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={incompleteTasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
        />
      </div>
    );
  }
}

export default App;
