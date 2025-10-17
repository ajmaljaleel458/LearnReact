import { useReducer } from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import "./TaskApp.css";
import type { Task } from "../../commen/interfaces";
import initialTasks from "../../data/Tasks";

type AddAction = {
  type: "added";
  id: number;
  text: string;
};

type UpdateAction = {
  type: "changed";
  task: Task;
};

type DeleteAction = {
  type: "deleted";
  id: number;
};

type Action = AddAction | UpdateAction | DeleteAction;

function taskReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: ");
    }
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer<Task[], [action: Action]>(
    taskReducer,
    initialTasks
  );

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <div className="TaskApp">
      Hello from TaskApp!
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

let nextId = 3;
