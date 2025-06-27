import { RootState } from "@/redux/store";
import { ITask } from "@/types/task";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low"
}


const initialState: InitialState = {
  tasks: [
    {
      id: "asdfdikdki",
      title: "GitHub Initialize",
      description: "Create Page",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "asdfdikdki",
      title: "Learing Git",
      description: "Git Commit",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "asdfdikdki",
      title: "Initalize fronend",
      description: "Create Home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },

    ],
    filter: "all",
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer;