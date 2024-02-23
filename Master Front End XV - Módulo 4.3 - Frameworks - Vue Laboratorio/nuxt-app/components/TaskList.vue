<template>
    <ul v-if="tasks.length > 0" class="divide-y">
      <li v-for="(task, index) in tasks" :key="index" class="flex flex-col md:flex-row items-center justify-between p-2">
        <div class="flex items-center mb-2 md:mb-0">
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
<p v-else class="text-gray-500 mt-4">No hay tareas disponibles!.</p>
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
  
  <style scoped>
  /* Puedes agregar estilos Tailwind adicionales según sea necesario */
  .line-through {
    text-decoration: line-through;
  }
  
  /* Estilos para hacer la lista flexible en dispositivos móviles */
  @media (max-width: 768px) {
    .flex-col {
      flex-direction: column;
    }
  
    .md\:flex-row {
      flex-direction: row;
    }
  
    .mb-2 {
      margin-bottom: 0.5rem;
    }
  
    .md\:mb-0 {
      margin-bottom: 0;
    }
  }
  </style>