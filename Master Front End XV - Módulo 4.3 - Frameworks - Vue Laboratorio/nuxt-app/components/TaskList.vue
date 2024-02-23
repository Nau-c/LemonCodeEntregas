<template>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.name }}
        <button @click="toggleTask(index)">
          {{ task.completed ? 'Desmarcar' : 'Marcar' }}
        </button>
        <button @click="removeTask(index)">Eliminar</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array, // Deberías pasar las tareas como prop desde la página principal
    },
    methods: {
      toggleTask(index) {
        // Implementa la lógica para marcar/desmarcar una tarea
        this.$emit('toggle-task', index);
      },
      removeTask(index) {
        // Implementa la lógica para eliminar una tarea
        this.$emit('remove-task', index);
      },
    },
  };
  </script>
  
