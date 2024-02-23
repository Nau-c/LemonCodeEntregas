<template>
    <div>
      <input
        v-model="newTask"
        @keydown.enter="addTask"
        placeholder="Ingrese una nueva tarea..."
      />
      <button @click="addTask" class="ml-4 mt-4 border border-green-500 rounded p-2 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out">Agregar</button>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
/*     defineProps<{}>();

    defineOptions({
      tasks: Array,
    });

    const newTask = ref(""); */

  export default {
    data() {
      return {
        newTask: "",
      };
    },
    methods: {


      addTask() {
        this.$emit('addTask', this.newTask);
        this.resetNewTask();
      },
      resetNewTask() {
        this.newTask = '';
      }
  },
};
</script>
