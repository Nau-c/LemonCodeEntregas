<template>
      <TaskInput @addTask="addTask"/>
      <TaskList :tasks="tasks" @removeTask="removeTask" @toggleTask="toggleTask"/>
</template>
  
<script lang="ts">
import { ref } from 'vue';
import TaskInput from '@/components/TaskInput.vue';
import TaskList from '@/components/TaskList.vue';
// import { useStateTaskStore } from '@/store/todo';

// const tasks = ref([]);

// const addTask = (task: string) => {
//   // Implementa la lógica para agregar una tarea
//   tasks.value.push({ name: task, completed: false });
// };
 
/* const addTask = (task: string) => {
      try {
        const stateTaskStore = useStateTaskStore();
        if (this.newTask.trim() !== "") {
          stateTaskStore.addTask(this.newTask.trim());
          this.newTask = "";
        }
      } catch (error) {
        console.error("Error adding task:", error);
      }
    } */

  export default {
    data() {
      return {
        newTask: "",
        tasks: []
      };
    },
    mounted() {
      const stateTaskStore = useStateTaskStore();
      this.tasks = stateTaskStore.getTasks() ;

    },
    methods: {
      addTask (task: string) {
        try {
          const stateTaskStore = useStateTaskStore();
          if (task.trim() !== "") {
            stateTaskStore.addTask(task.trim());
            this.tasks = stateTaskStore.getTasks() ;
          }
        } catch (error) {
          console.error("Error adding task:", error);
        }
      },
      removeTask (id: number) {
        try {
            const stateTaskStore = useStateTaskStore();
            stateTaskStore.removeTask(id);
            this.tasks = stateTaskStore.getTasks() ;
            } catch (error) {
            console.error("Error removing task:", error);
        }
    },
    toggleTask (id: number) {
      try {
          const stateTaskStore = useStateTaskStore();
          stateTaskStore.toggleTask(id);
          this.tasks = stateTaskStore.getTasks() ;
          } catch (error) {
          console.error("Error toggling task:", error);
        }
    }
    }
}

</script>



