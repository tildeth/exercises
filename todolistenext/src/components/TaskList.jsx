"use client";
import React from "react";
import styles from "../app/styles/todoApp.module.css"


const TaskList = ({tasks, toggleComplete}) => {
    return (  
        <ul className={styles.taskList}>
            {tasks.map((task) =>(
                <li key={task.id}
                className={task.completed ? styles.completed :'' }
                >
                    {task.text}
                    <button onClick={() => toggleComplete(task.id)}>
                        {task.completed ? 'Ikke færdig' : 'Færdig'}
                    </button>
                </li>
            ))}
        </ul>
    );
}
 
export default TaskList;