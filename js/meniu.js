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

 

    


window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ro',
    includedLanguages: 'ro,en,de,it,fr,es',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}


document.addEventListener("DOMContentLoaded", function () {
  const openBtns = document.querySelectorAll('.openBtn');
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closeBtn');
  const popupContent = document.getElementById('popupContent');

  if (openBtns) {
    openBtns.forEach(button => {
      button.onclick = function () {
        popupContent.textContent = button.getAttribute('data-popup-content');
        popup.style.display = 'block';
      }
    });
  }

  if (closeBtn) {
    closeBtn.onclick = function () {
      popup.style.display = 'none';
    }
  }

  
  const menuButton = document.getElementById('menuButton');
  const menuPopup = document.getElementById('menuPopup');
  const overlay = document.getElementById('overlay');
  const closeChatButton = document.getElementById('closeChatButton');

  if (menuButton) {
    menuButton.addEventListener('click', function () {
      menuPopup.style.display = 'block';
      overlay.style.display = 'block';
    });
  }

  if (closeChatButton) {
    closeChatButton.addEventListener('click', function () {
      menuPopup.style.display = 'none';
      overlay.style.display = 'none';
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function () {
      menuPopup.style.display = 'none';
      overlay.style.display = 'none';
    });
  }

  // Buton dark mode
  const toggleButton = document.getElementById('darkModeToggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Anul în footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});


// Selectăm toate butoanele cu clasa "openBtn" și pop-up-ul
//       const openBtns = document.querySelectorAll('.openBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupContent = document.getElementById('popupContent');

// Când se apasă un buton, deschide pop-up-ul cu conținutul corespunzător
openBtns.forEach(button => {
    button.onclick = function () {
        // Setează conținutul pop-up-ului din atributul 'data-popup-content'
        popupContent.innerHTML = button.getAttribute('data-popup-content'); // Folosește innerHTML pentru a permite HTML
        popup.style.display = 'block';
    }
});

// Când apesi butonul de închidere, închide pop-up-ul
closeBtn.onclick = function () {
    popup.style.display = 'none';
}



