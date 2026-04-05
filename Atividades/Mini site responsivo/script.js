// ======================================================
// DEMON SLAYER FANSITE — script.js
// ======================================================


// ======================================================
// PARTE 1 - BARRA DE BUSCA
// ======================================================

const searchInput = document.getElementById("searchInput");
const cards       = document.querySelectorAll(".cards");
const emptyState  = document.getElementById("emptyState");

searchInput.addEventListener("input", function () {
  const term = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach(function (card) {
    const name = card.querySelector("h2").textContent.toLowerCase();

    if (name.includes(term)) {
      card.classList.remove("hidden-card");
      visibleCount++;
    } else {
      card.classList.add("hidden-card");
    }
  });

  if (visibleCount === 0) {
    emptyState.classList.add("show");
  } else {
    emptyState.classList.remove("show");
  }
});


// ======================================================
// PARTE 2 - MODAL DOS CARDS
// ======================================================

const modal         = document.getElementById("modal");
const modalTitle    = document.getElementById("modalTitle");
const modalText     = document.getElementById("modalText");
const modalExtra    = document.getElementById("modalExtra");
const closeModalBtn = document.getElementById("closeModalBtn");

function openModal(title, text, extra) {
  modalTitle.textContent = title;
  modalText.textContent  = text;

  // Exibe as habilidades apenas se o data-extra estiver preenchido
  if (extra) {
    modalExtra.textContent = extra;
    modalExtra.style.display = "block";
  } else {
    modalExtra.style.display = "none";
  }

  modal.classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  modal.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

const openModalButtons = document.querySelectorAll(".open-card-modal");

openModalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card  = button.closest(".cards");
    const title = card.querySelector("h2").textContent;
    const text  = card.querySelector("p").textContent;

    // Lê o atributo data-extra do botão
    const extra = button.dataset.extra || "";

    openModal(title, text, extra);
  });
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});


// ======================================================
// PARTE 3 - FECHAR COM ESC
// ======================================================

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});


// ======================================================
// PARTE 4 - LINK ATIVO NA NAVEGAÇÃO
// ======================================================

const navLinks = document.querySelectorAll(".nav-link a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (l) { l.classList.remove("active"); });
    link.classList.add("active");
  });
});