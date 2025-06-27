import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"


const Task = () => {
    // const tasks = useAppSelector((state) => state.todo.tasks)
    const tasks = useAppSelector(selectTasks)
 
    // console.log(tasks);
 
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-4">
        {" "}
        <h1>Task</h1>
        <AddTaskModal />
      </div>
      {tasks.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
}

export default Task