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
            const foundIndex = this.tasks.findIndex((task) => task.id === id);
            if (foundIndex !== -1) {
                this.tasks[foundIndex].completed =
                    !this.tasks[foundIndex].completed;
            }
        },
        removeTask(id: number) {
            const foundIndex = this.tasks.findIndex((task) => task.id === id);
            if (foundIndex !== -1) {
                this.tasks.splice(foundIndex, 1);
            }
        },
        getTasks() {
            return this.tasks;
        },
        editTask(id: number, task) {
            const foundIndex = this.tasks.findIndex((task) => task.id === id);
            if (foundIndex !== -1) {
                this.tasks[foundIndex].name = task.name;
            }
        },
    },
    // Persist the store in localStorage
    persist: true,
});
