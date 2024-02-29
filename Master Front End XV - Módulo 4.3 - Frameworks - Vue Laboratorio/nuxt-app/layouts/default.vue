<template>
    <div class="app-container">
        <h1 class="text-6xl mt-4 text-4xl font-bold text-center mb-8">
      <!-- <span class="bg-gradient-to-r from-blue-500 to-violet-500 text-transparent"> -->
            <span class="text-white">Mi Aplicación ToDo App!</span>
            <!-- </span> -->
    </h1>
    <div class="flex flex-col min-h-[100dvh] items-center">
        <!-- <TaskInput class="mb-4 "/> -->
        <slot/>
    </div>
    
</div>
<footer class="bg-gray-800 text-white py-4 text-center">
    <p>&copy; 2024 Mi Aplicación ToDo App. Todos los derechos reservados Nauzet López Mendoza.</p>
  </footer>
</template>


<style scoped>
.app-container {
  background-image: url('/image/fondo.jpg'); 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>