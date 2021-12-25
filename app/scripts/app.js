const toggleBtn = document.querySelector(".header-toggle");
const headerMenu = document.querySelector(".header-menu");

toggleBtn.addEventListener("click", () => {
  headerMenu.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".header-menu") || e.target.closest(".header-toggle"))
    return;

  headerMenu.classList.remove("open");
});
