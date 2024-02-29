<template>
    <div class="flex">
      <!-- Display incomplete tasks -->
      <div class="flex-1">
      <h2 v-if="incompleteTasks.length > 0" class="mt-4 text-2xl font-bold text-indigo-600 mb-4">Lista pendientes:</h2>
      <ul v-if="incompleteTasks.length > 0" class="divide-y">
        <li v-for="(task, index) in incompleteTasks" :key="index" class="flex flex-col md:flex-row items-center justify-between p-2 bg-white shadow-md rounded-lg mb-2">
          <div class="flex items-center mb-2 md:mb-0">
            <span v-if="task.completed" class="mr-2 text-green-500">
              <Icon name="streamline-emojis:sparkles" />
            </span>
            <span v-if="task.id === idEditable "> 
              <input class="border border-gray-400 p-1 focus:outline-none focus:ring focus:border-blue-300 rounded-md" v-model="task.name" />
            </span>
            <span v-else :class="{ 'line-through': task.completed, 'text-gray-700': !task.completed }">{{ task.name }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <button @click="toggleTask(task.id)" class="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
              <Icon name="flat-color-icons:ok" />
              {{ task.completed ? 'Desmarcar' : 'Marcar' }}
            </button>
            <button @click="removeTask(task.id)" class="px-2 py-1 bg-red-500 text-white rounded focus:outline-none focus:ring focus:border-red-300">
              <Icon name="fxemoji:ballottboxwithscriptx" /> Eliminar
            </button>
            <button v-if="isEditing" @click="saveTask(task.id)" class="px-2 py-1 bg-green-500 text-white rounded focus:outline-none focus:ring focus:border-green-300">
              <Icon name="dashicons:cloud-saved" /> Guardar
            </button>
            <button v-if="isEditing" @click="cancelEdit" class="px-2 py-1 bg-red-500 text-white rounded focus:outline-none focus:ring focus:border-red-300">
              <Icon name="lets-icons:cancel-fill" /> Cancelar
            </button>
            <button v-else @click="editTask(task.id)" class="px-2 py-1 bg-yellow-500 text-white rounded focus:outline-none focus:ring focus:border-yellow-300">
              <Icon name="fxemoji:pencil" /> Editar
            </button>
          </div>
        </li>
      </ul>
      
      <p v-else class="text-white text-2xl font-bold mt-4">No hay tareas disponibles!.</p>
    </div>
      <!-- Display completed tasks -->
      <div class="ml-4 flex-2">
      <h2 v-if="completedTasks.length > 0" class="mt-4 text-2xl font-bold text-green-600">Lista completadas:</h2>
      <ul v-if="completedTasks.length > 0" class="mt-4 divide-y">
        <li v-for="(task, index) in completedTasks" :key="index" class="flex flex-col md:flex-row items-center justify-between p-2 bg-white shadow-md rounded-lg mb-2">
          <div class="flex items-center mb-2 md:mb-0">
            <span class="mr-2 text-green-500">
              <Icon name="streamline-emojis:sparkles" />
            </span>
            <span :class="{ 'line-through': task.completed, 'text-gray-700': !task.completed }">{{ task.name }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <button @click="toggleTask(task.id)" class="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
              <Icon name="flat-color-icons:ok" />
              {{ task.completed ? 'Desmarcar' : 'Marcar' }}
            </button>
          </div>
        </li>
      </ul>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isEditing: false,
        idEditable: null,
      };
    },
    props: {
      tasks: Array,
    },
    computed: {
      incompleteTasks() {
        return this.tasks.filter((task) => !task.completed);
      },
      completedTasks() {
        return this.tasks.filter((task) => task.completed);
      },
    },
    methods: {
      toggleTask(id) {
        this.$emit('toggle-task', id);
      },
      removeTask(id) {
        this.$emit('remove-task', id);
      },
      editTask(id) {
        this.idEditable = id;
        this.isEditing = true;
        this.editedTaskName = this.getTaskById(id).name;
      },
      saveTask(id) {
        this.$emit('save-task', id, this.editedTaskName);
        this.cancelEdit();
      },
      cancelEdit() {
        this.idEditable = null;
        this.isEditing = false;
        this.editedTaskName = '';
      },
      getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
      },
    },
  };
  </script>