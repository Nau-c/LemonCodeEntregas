import { defineStore } from "pinia";

export const useStateTaskStore = defineStore({
    id: "StateTaskStore",
    state: () => ({
        tasks: [] as string[],
    }),
    actions: {
        addTask(task: string) {
            this.tasks.push(task);
        },
        toggleTask(index: number) {
            // Toggle the completion status of the task at the specified index
            // Implement this based on your state structure
        },
        removeTask(index: number) {
            this.tasks.splice(index, 1);
        },
    },
});
