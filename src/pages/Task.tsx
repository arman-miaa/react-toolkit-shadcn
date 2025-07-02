import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { Tabs } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";


const Task = () => {
    // const tasks = useAppSelector((state) => state.todo.tasks)
  const tasks = useAppSelector(selectTasks)
  const dispatch = useAppDispatch();
 
    // console.log(tasks);
 
  return (
    <div className="container mx-auto">
      <div className="flex justify-end items-center my-4 gap-5">
        {" "}
        <h1 className="mr-auto">Task</h1>
        <Tabs defaultValue="all">
          <TabsList  className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter("low"))} value="low">low</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter("medium"))} value="medium">medium</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter("high"))} value="high">high</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      {tasks.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
}

export default Task