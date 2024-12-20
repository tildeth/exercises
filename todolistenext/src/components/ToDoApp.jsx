"use client";
import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import styles from "../app/styles/todoApp.module.css";
  
const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);

  //Tilføjelse af opgave
  const addTask = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskText = formData.get("task");

    if (taskText.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      completed: false,
    };

    //Opdatere task med nye opgaver
    setTasks((prevTasks) => [...prevTasks, newTask]);
    event.target.reset(); //ressetter formularen
  };

  // Toggle for at markere færdig/ikke-færdig
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //Funktion til at slette opagver
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  //Filtrering af færdige og ikke færdige liste
  const todoTasks = tasks.filter((task) => !task.completed);
  const doneTasks = tasks.filter((task) => task.completed);

  return (
    <div className={styles.appContainer}>
      <h1>To-Do</h1>
      <TaskForm addTask={addTask} />
      <div className={styles.taskSections}>
        <div className={styles.todoSection}>
          <h2>To Dos</h2>
          <TaskList
            tasks={todoTasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
      </div>
      <div className={styles.doneSection}>
          <h2>Done finito</h2>
          <TaskList
            tasks={doneTasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
      </div>
  );
};

export default ToDoApp;
