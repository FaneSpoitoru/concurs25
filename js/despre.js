function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'ro',
      includedLanguages: 'ro,en,de,it,fr,es',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }



    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });


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

    document.getElementById("year").textContent = new Date().getFullYear();
