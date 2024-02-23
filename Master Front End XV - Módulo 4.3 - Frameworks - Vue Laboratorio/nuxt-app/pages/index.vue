<template>
       <TaskInput @addTask="addTask"/>
      <TaskList :tasks="tasks"/>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import TaskInput from '@/components/TaskInput.vue';
import TaskList from '@/components/TaskList.vue';
// import { useStateTaskStore } from '@/store/todo';

const tasks = ref([]);

const addTask = (task: string) => {
  // Implementa la lógica para agregar una tarea
  tasks.value.push({ name: task, completed: false });
};

</script>



