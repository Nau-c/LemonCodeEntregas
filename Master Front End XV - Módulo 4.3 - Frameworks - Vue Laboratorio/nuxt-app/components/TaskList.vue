<template>
    <ul v-if="tasks.length > 0" class="divide-y">
      <li v-for="(task, index) in tasks" :key="index" class="flex flex-col md:flex-row items-center justify-between p-2">
        <div class="flex items-center mb-2 md:mb-0">
          <span v-if="task.completed" class="mr-2">
            <Icon name="streamline-emojis:sparkles" />
          </span>
          <span v-if="task.id === idEditable "> 
            <input class="border border-gray-400 p-1" 
            v-model="task.name"
            />
          </span><span v-else :class="{ 'line-through': task.completed }"> {{ task.name }}
          </span>
        </div>
        <div class="flex items-center space-x-2">
            <button @click="toggleTask(task.id)" class=" ml-2 px-2 py-1 bg-blue-500 text-white rounded">
              <Icon name="flat-color-icons:ok" />
              {{ task.completed ? 'Desmarcar' : 'Marcar' }}
            </button>
            <button @click="removeTask(task.id)" class="px-2 py-1 bg-red-500 text-white rounded">
              <Icon name="fxemoji:ballottboxwithscriptx" /> Eliminar
            </button>
            <button v-if="isEditing" @click="saveTask(task.id)" class="px-2 py-1 bg-green-500 text-white rounded">
          <Icon name="dashicons:cloud-saved" /> Guardar
        </button>
        <button v-if="isEditing" @click="cancelEdit" class="px-2 py-1 bg-red-500 text-white rounded">
          <Icon name="lets-icons:cancel-fill" /> Cancelar
        </button>
        <button v-else @click="editTask(task.id)" class="px-2 py-1 bg-red-500 text-white rounded">
          <Icon name="fxemoji:pencil" /> Editar
        </button>
        </div>
    </li>
</ul>
<p v-else class="text-gray-500 mt-4">No hay tareas disponibles!.</p>
  </template>
  <script>
  
  export default {
    data() {
      return {
        isEditing: false,
        idEditable: null
      };
    },
    props: {
      tasks: Array, // Deberías pasar las tareas como prop desde la página principal
    },
    methods: {
      toggleTask(id) {
        this.$emit('toggle-task', id);
      },
      removeTask(id) {
        this.$emit('remove-task', id);
      },
    //   editTask(id) {
    //     console.log('id', id)
    //     this.idEditable = id;
    //     this.isEditing = true;
    // },
    editTask(id) {
      this.idEditable = id;
      this.isEditing = true;
      this.editedTaskName = this.getTaskById(id).name;
    },
    saveTask(id) {
      // Guarda la tarea editada
      this.$emit('save-task', id, this.editedTaskName);
      this.cancelEdit();
    },
    cancelEdit() {
      // Cancela la edición
      this.idEditable = null;
      this.isEditing = false;
      this.editedTaskName = '';
    },
    getTaskById(id) {
      // Obtiene la tarea por ID
      return this.tasks.find(task => task.id === id);
    },
  }
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