import { defineStore } from "pinia";

export const useStateTaskStore = defineStore({
    id: "StateTaskStore",
    state: () => ({
        tasks: [] as Task[],
    }),
    actions: {
        addTask(task: string) {
            let objectTask = {
                id: Math.random().toString(36).substr(2, 9),
                timestamp: new Date().getTime(),
                name: task,
                completed: false,
            };
            this.tasks.push(objectTask);
        },
        toggleTask(id: number) {
            // Toggle the completion status of the task at the specified index
            // Implement this based on your state structure
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id === id) {
                    this.tasks[i].completed = !this.tasks[i].completed;
                    break;
                }
            }
        },
        removeTask(id: number) {
            // Remove the task at the specified index
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id === id) {
                    this.tasks.splice(i, 1);
                    break;
                }
            }
        },
        getTasks() {
            // Fetch tasks from an API
            return this.tasks;
        },
    },
});
