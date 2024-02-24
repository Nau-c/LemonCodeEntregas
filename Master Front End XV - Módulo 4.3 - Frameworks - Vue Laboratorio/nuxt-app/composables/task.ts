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
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id === id) {
                    this.tasks[i].completed = !this.tasks[i].completed;
                    break;
                }
            }
        },
        removeTask(id: number) {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id === id) {
                    this.tasks.splice(i, 1);
                    break;
                }
            }
        },
        getTasks() {
            return this.tasks;
        },
    },
    persist: true,
});
