export type StateTaskStore = {
    tasks: string[];
    timestamp: number;
    addTask: (task: string) => void;
    toggleTask: (index: number) => void;
    removeTask: (index: number) => void;
};

export interface Task {
    id: string;
    timestamp: number;
    name: string;
    completed: boolean;
}
