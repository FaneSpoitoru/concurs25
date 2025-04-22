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

 
document.getElementById("chatButton").addEventListener("click", function() {
    document.getElementById("chatContainer").style.display = "flex";
});

document.getElementById("closeChat").addEventListener("click", function() {
    document.getElementById("chatContainer").style.display = "none";
});

document.getElementById("chatInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});





function sendMessage() {
    let inputField = document.getElementById("chatInput");
    let message = inputField.value.trim();
    
    if (message !== "") {
        let chatBody = document.getElementById("chatBody");

        // Creăm container pentru mesaj
        let messageContainer = document.createElement("div");
        messageContainer.classList.add("message", "user-message");
        messageContainer.textContent = message;

        chatBody.appendChild(messageContainer);
        chatBody.scrollTop = chatBody.scrollHeight;
        inputField.value = "";

        // Simulăm un răspuns automat de la bot
        setTimeout(() => {
            let botReply = document.createElement("div");
            botReply.classList.add("message", "bot-message");
            botReply.textContent = "Interesant! Spune-mi mai multe!", "salut";
            chatBody.appendChild(botReply);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}


const traduceri = {
  ro: {
    textIndex: [
      "bucura te de preparatele autentice italiene",
      "pizza",
      "paste",
      "salate",
      "bauturi",
      "aperitive"
    ],
    navbar: ["Meniu", "Restaurant", "Galerie", "Rezervări", "Contact", "Despre"]
  },
  en: {
    textIndex: [
      "Enjoy authentic Italian dishes",
      "pizza",
      "pasta",
      "salad",
      "apetite"
    ],
    navbar: ["Menu", "Restaurant", "Gallery", "Reservations", "Contact", "About"]
  },
  it: {
    textIndex: [
      "Godetevi autentici piatti italiani",
      "pizza",
      "pasta",
      "salate",
      "Bevanda",
      "antipasti"
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
      const paragrafe = document.querySelectorAll(".categorie, .body-text");
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
    