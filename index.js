document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".custom-toggler");
    const navbarCollapse = document.getElementById("navbarNav");

    toggler.addEventListener("click", function () {
      this.classList.toggle("active");
    });

    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
      toggler.classList.remove("active");
    });

    navbarCollapse.addEventListener("shown.bs.collapse", function () {
      toggler.classList.add("active");
    });
  });