document.addEventListener("DOMContentLoaded", () => {
  feather.replace();

  const buscarIcon = document.querySelector('.top-icons a[title="Buscar"]');
  const ubicacionIcon = document.querySelector('.top-icons a[title="Ubicación"]');
  const contactoIcon = document.querySelector('.top-icons a[title="Contacto"]');
  const carritoIcon = document.querySelector('.top-icons a[title="Carrito"]');

  const searchContainer = document.getElementById("search-container");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  const contactMenu = document.getElementById("contact-menu");
  const contactClose = document.getElementById("contact-close");

  // Lupa - Abrir buscador
  buscarIcon.addEventListener("click", (e) => {
    e.preventDefault();
    contactMenu.classList.add("hidden");
    searchContainer.classList.remove("hidden");
    searchInput.focus();
  });

  // Lupa - Buscar (simulado con alert)
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query !== "") {
      alert(`Buscando: ${query}`);
      searchContainer.classList.add("hidden");
    }
  });

  // Cerrar buscador al hacer click afuera
  document.addEventListener("click", (e) => {
    if (
      !searchContainer.classList.contains("hidden") &&
      !searchContainer.contains(e.target) &&
      !buscarIcon.contains(e.target)
    ) {
      searchContainer.classList.add("hidden");
    }
  });

  // Menú contacto toggle
  contactoIcon.addEventListener("click", (e) => {
    e.preventDefault();
    searchContainer.classList.add("hidden");
    contactMenu.classList.toggle("hidden");
  });

  // Botón cerrar contacto
  contactClose?.addEventListener("click", () => {
    contactMenu.classList.add("hidden");
  });

  // Carrito - sin funcionalidad
  carritoIcon.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Función carrito no implementada aún");
  });
});
