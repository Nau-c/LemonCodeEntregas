<template>
    <div class="flex items-center space-x-2 mt-5">
      <input
        v-model="newTask"
        @keydown.enter="addTask"
        placeholder="Ingrese una nueva tarea..."
        class="p-2 border border-gray-300 focus:outline-none focus:border-green-500 rounded-md"

      />
      <button @click="addTask" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out"
>Agregar</button>
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
