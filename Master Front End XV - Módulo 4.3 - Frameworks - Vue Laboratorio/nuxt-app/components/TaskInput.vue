<template>
    <div>
      <input
        v-model="newTask"
        @keydown.enter="addTask"
        placeholder="Ingrese una nueva tarea..."
      />
      <button @click="addTask">Agregar</button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        newTask: "",
      };
    },
    methods: {
  addTask() {
    try {
      if (this.newTask.trim() !== "") {
        this.$store.task.addTask(this.newTask.trim());
        this.newTask = "";
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },
},
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos para este componente */
  </style>
  