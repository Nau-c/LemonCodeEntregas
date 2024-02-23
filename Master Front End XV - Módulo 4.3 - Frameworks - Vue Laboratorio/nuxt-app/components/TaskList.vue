<template>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="flex items-center justify-between border-b p-2">
        <div class="flex items-center">
          <span v-if="task.completed" class="mr-2">
            <Icon name="🚀" />
          </span>
          <span :class="{ 'line-through': task.completed }">{{ task.name }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <button @click="toggleTask(task.id)" class=" ml-2 px-2 py-1 bg-blue-500 text-white rounded">
            {{ task.completed ? 'Desmarcar' : 'Marcar' }}
          </button>
          <button @click="removeTask(task.id)" class="px-2 py-1 bg-red-500 text-white rounded">
            Eliminar
          </button>
        </div>
      </li>
    </ul>
  </template>
  <script>
  export default {
    props: {
      tasks: Array, // Deberías pasar las tareas como prop desde la página principal
    },
    methods: {
      toggleTask(id) {
        // Implementa la lógica para marcar/desmarcar una tarea
        this.$emit('toggle-task', id);
      },
      removeTask(id) {
        // Implementa la lógica para eliminar una tarea
        this.$emit('remove-task', id);
      },
    },
  };
  </script>
  
