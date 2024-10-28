document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  const showElements = () => {
    fadeElements.forEach((element) => {
      element.classList.add("visible");
    });
  };
  setTimeout(showElements, 100);
});

document
  .querySelector(".toggle-sidebar")
  .addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  });
