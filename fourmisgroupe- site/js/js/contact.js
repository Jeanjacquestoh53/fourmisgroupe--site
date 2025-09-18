// Récupération des éléments
const openBtn = document.getElementById("openContact");
const modal = document.getElementById("contactModal");
const closeBtn = document.getElementById("closeModal");

// Ouvrir le formulaire
openBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // Utilisation de Flexbox
});

// Fermer le formulaire
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fermer si on clique en dehors du formulaire
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
