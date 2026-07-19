document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const body = document.body;
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const dropdown = document.querySelector(".nav-links");
  const container = document.querySelector(".container");
  const names = document.querySelectorAll(".name");
  names.forEach((nameEl) => {
    const b = baffle(nameEl).set({
      characters: "░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒",
      speed: 180,
    });
    
    // Initial scramble on load
    b.start();
    b.reveal(3000); // Revealed faster so they aren't unreadable for too long

    // Bring the effect back when hovering over the card
    const card = nameEl.closest('.card');
    if (card) {
      card.addEventListener('mouseenter', () => {
        b.start();
      });
      card.addEventListener('mouseleave', () => {
        b.reveal(500);
      });
    }
  });

  function applyTheme(theme) {
    if (theme === "light") {
      body.classList.add("dark-mode");
      darkModeToggle.textContent = "☀️";
    } else {
      body.classList.remove("dark-mode");
      darkModeToggle.textContent = "🌙";
    }
  }

  document.querySelector(".brand").addEventListener("click", function () {
    window.location.href = `../Home/home.html`;
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme("light");
  }

  darkModeToggle.addEventListener("click", () => {
    const currentTheme = body.classList.contains("dark-mode")
      ? "light"
      : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    // console.log(newTheme)

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  hamburgerMenu.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });
});
