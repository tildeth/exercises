"use client";
import React from "react";
import styles from "../app/styles/todoApp.module.css"

const TaskForm = ({addTask}) => {
    return (  
        <form onSubmit={addTask} className={styles.taskForm}>
            <input className={styles.inputForm} name="task" type="text" placeholder="Tilføj opgave her snutte" />
            <button type="sumbit">Tilføj </button>
        </form>
    );
};
 
export default TaskForm;