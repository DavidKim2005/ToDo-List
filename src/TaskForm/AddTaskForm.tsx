import React from "react";

interface Props extends React.PropsWithChildren {
    task: string
    onInputChange: React.ChangeEventHandler<HTMLInputElement>,
    onSubmit: React.FormEvent<HTMLFormElement>
}

const TaskForm: React.FC<Props> = ({ taskText, onInputChange, onSubmit }) => {
    return (
        <div className="taskForm">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={taskText}
                    onChange={onInputChange}
                    placeholder="Add a task"
                />
                <button type="submit" className="addBtn">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm