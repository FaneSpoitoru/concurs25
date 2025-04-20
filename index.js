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
        ro: [
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
        en: [
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
        it: [
          "Benvenuto a D'Amici!",
          "D'Amici non è solo un ristorante, ma un vero viaggio nel cuore dell'Italia.",
          "Ogni angolo del paese ha le sue tradizioni gastronomiche – ingredienti e ricette variano dalle montagne al mare, da regioni verdi e fertili a zone soleggiate.",
          "Da D'Amici, ti invitiamo a esplorare l'essenza autentica dell'Italia in ogni piatto..",
          "Celebriamo 'l'arte della cucina' – l'arte di cucinare!.",
          "La nostra cucina mediterranea, raffinata e piena di sapore, è completata da una selezione speciale di vini che aggiungono eleganza ad ogni pasto.",
          "Ogni visita diventa un'esperienza memorabile per tutti i sensi.",
          "Con affetto,",
          "ㅤㅤㅤToni"
        ]
      };
    
      const voci = {
        ro: "ro-RO",
        en: "en-US",
        it: "it-IT"
      };
    
      function schimbaLimba(limba) {
        const paragrafe = document.querySelectorAll(".restaurant-description .body-text, .restaurant-description h1, .semnatura, .restaurant-description p:not(.body-text):not(.semnatura)");
        const texte = traduceri[limba];
        const lang = voci[limba];
    
        paragrafe.forEach((el, i) => {
          el.textContent = texte[i];
        });
    

      }
    