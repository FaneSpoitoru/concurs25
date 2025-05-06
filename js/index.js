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
  const traduceri = {
    ro: {
      textIndex: [
        "Bine ați venit la D'Amici!",
        "D`Amici nu este doar un restaurant, ci o adevărată călătorie în inima Italiei.",
        "Fiecare colț al țării are propriile sale tradiții gastronomice – ingredientele și rețetele variază de la munți la mare, de la regiuni verzi și fertile la zonele pline de soare.",
        "La D`Amici, vă invităm să explorați esența autentică a Italiei în fiecare preparat..",
        "Sărbătorim „l'arte della cucina” – arta de a găti!.",
        "Bucătăria noastră mediteraneană, rafinată și plină de arome, este completată de o selecție de vinuri deosebite, care vor adăuga un plus de eleganță fiecărei mese.",
        "Fiecare vizită devine o experiență memorabilă pentru toate simțurile.",
        "Cu drag,",
        "ㅤㅤㅤToni"
      ],
      navbar: ["Meniu", "Restaurant", "Galerie", "Rezervări", "Contact", "Despre"]
    },
    en: {
      textIndex: [
        "Welcome to D'Amici!",
        "D'Amici is not just a restaurant, but a true journey into the heart of Italy.",
        "Every corner of the country has its own culinary traditions – ingredients and recipes vary from mountains to sea, from lush green regions to sun-soaked lands.",
        "At D'Amici, we invite you to explore the authentic essence of Italy in every dish..",
        "We celebrate 'l'arte della cucina' – the art of cooking!.",
        "Our Mediterranean cuisine, refined and full of flavor, is complemented by a special selection of wines that add elegance to every meal.",
        "Each visit becomes a memorable experience for all the senses.",
        "With love,",
        "ㅤㅤㅤToni"
      ],
      navbar: ["Menu", "Restaurant", "Gallery", "Reservations", "Contact", "About"]
    },
    it: {
      textIndex: [
        "Benvenuto a D'Amici!",
        "D'Amici non è solo un ristorante, ma un vero viaggio nel cuore dell'Italia.",
        "Ogni angolo del paese ha le sue tradizioni gastronomiche – ingredienti e ricette variano dalle montagne al mare, da regioni verdi e fertili a zone soleggiate.",
        "Da D'Amici, ti invitiamo a esplorare l'essenza autentica dell'Italia in ogni piatto..",
        "Celebriamo 'l'arte della cucina' – l'arte di cucinare!.",
        "La nostra cucina mediterranea, raffinata e piena di sapore, è completata da una selezione speciale di vini che aggiungono eleganza ad ogni pasto.",
        "Ogni visita diventa un'esperienza memorabile per tutti i sensi.",
        "Con affetto,",
        "ㅤㅤㅤToni"
      ],
      navbar: ["Menù", "Ristorante", "Galleria", "Prenotazioni", "Contatto", "Chi siamo"]
    }
  };
  
      const voci = {
        ro: "ro-RO",
        en: "en-US",
        it: "it-IT"
      };
    
      function schimbaLimba(limba) {
        localStorage.setItem('limbaSelectata', limba);
      
        // Text principal index
        const paragrafe = document.querySelectorAll(".restaurant-description .body-text, .restaurant-description h1, .semnatura");
        const texte = traduceri[limba].textIndex;
        paragrafe.forEach((el, i) => {
          el.textContent = texte[i];
        });
      
        // Navbar
        const navItems = document.querySelectorAll(".nav-item");
        const navText = traduceri[limba].navbar;
        navItems.forEach((el, i) => {
          el.textContent = navText[i];
        });
      }
      

      document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('darkModeToggle');
      
        if (!toggleButton) return;
      
        // Aplică tema dark dacă era salvată anterior
        if (localStorage.getItem('theme') === 'dark') {
          document.body.classList.add('dark-mode');
        }
      
        toggleButton.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
      
          if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
          } else {
            localStorage.setItem('theme', 'light');
          }
        });
      });
      

      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'ro',
            includedLanguages: 'ro,en,de,it,fr,es',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }




        setTimeout(() => {
          const el = document.getElementById("text");
          el.remove(); // sau el.remove();
        }, 3500);

      

        document.getElementById("year").textContent = new Date().getFullYear();
