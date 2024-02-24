<template>
      <TaskInput @addTask="addTask"/>
      <TaskList :tasks="tasks" @removeTask="removeTask" @toggleTask="toggleTask" @editTask="editTask"/>
</template>
  
<script lang="ts">
import { ref } from 'vue';
import TaskInput from '@/components/TaskInput.vue';
import TaskList from '@/components/TaskList.vue';

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
    },
    editTask (id: number, name: string){
        try {
            const stateTaskStore = useStateTaskStore();
            stateTaskStore.editTask(id, name);
            } catch (error) {
            console.error("Error editing task:", error);
        }
    }
    }
}
</script>



