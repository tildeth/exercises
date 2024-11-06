"use client";
import React from "react";
import styles from "../app/styles/todoApp.module.css"


const TaskList = ({tasks, toggleComplete, deleteTask}) => {
    return (  
        <ul className={styles.taskList}>
            {tasks.map((task) =>(
                <li key={task.id}
                className={task.completed ? styles.completed :'' }
                >
                    <span>{task.text}</span>
                    <div>
                    <button onClick={() => toggleComplete(task.id)}>
                        {task.completed ? 'Fortryd' : 'Færdig'}
                    </button>
                    <button onClick={() => deleteTask(task.id)}
                        className={styles.deleteButton}>
                            Slet
                    </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
 
export default TaskList;