import { useContext, useState } from "react";
import { TasksContext, TasksDispatchContext, useTaskDispatch, useTasks } from './TasksContext';

function TaskList() {
    const tasks = useTasks();
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task}/>
                </li>
            ))}
        </ul>
    );
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTaskDispatch();
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text} onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                          ...task,
                          text: e.target.value
                        }
                      });
                }}/>
                <button onClick={() => setIsEditing(false)}>
                    save
                </button>
            </>
        )
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }

    return (
        <>
            <input type="checkbox" />
            {taskContent}
            <button onClick={() => {
                dispatch({
                type: 'deleted',
                id: task.id
                });
            }}>
                Delete
            </button>
        </>
    );
}

export default TaskList;