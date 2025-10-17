import type { Task } from "../../commen/interfaces";
import "./TaskList.css";

type Prop = {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: Prop) {
  const taskList = tasks.map((task, index) => {
    return (
      <li key={index}>
        <label htmlFor="">
          <input type="checkbox" checked={false} />
          {task.text}
          <button onClick={() => onChangeTask(task)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Remove</button>
        </label>
        ;
      </li>
    );
  });
  return (
    <>
      <ul>{taskList}</ul>
    </>
  );
}
