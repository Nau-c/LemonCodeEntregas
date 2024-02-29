// Función para cambiar el contenido según el tamaño de la pantalla
function changeTextSecondScreenSize() {
    const elemento = document.getElementById('top-text');
    
    if (window.innerWidth < 1367) {
      elemento.textContent = "3";
    } else {
      elemento.textContent = "5";
    }
  }
  
  // Ejecuta la función cuando la página se carga y cuando la ventana se redimensiona
  window.addEventListener('load', changeTextSecondScreenSize);
  window.addEventListener('resize', changeTextSecondScreenSize);
  