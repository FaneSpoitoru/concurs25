import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  limit,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxhyUYPzt8SE_LFv4A_svzswxnhbSyCmM",
  authDomain: "review-50f0b.firebaseapp.com",
  projectId: "review-50f0b",
  storageBucket: "review-50f0b.appspot.com",
  messagingSenderId: "201117735805",
  appId: "1:201117735805:web:41dde2b142214f42dfca14",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Imgur client ID
const IMGUR_CLIENT_ID = "9af00deed5db3e8";

// Submit formular
document.getElementById("reviewForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const stars = document.querySelectorAll(".star.selected").length;
  const imageFile = document.getElementById("imageUpload").files[0];

  // Validare minimă
  if (!name || !message) {
    alert("Te rog completează numele și mesajul.");
    return;
  }

  let imageUrl = "";

  // Dacă s-a selectat o imagine
  if (imageFile) {
    if (!["image/jpeg", "image/png"].includes(imageFile.type)) {
      alert("Imaginea trebuie să fie JPG sau PNG.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
        },
        body: formData,
      });

      const data = await response.json();
      console.log("Imgur response:", data);

      if (!data.success) {
        throw new Error("Uploadul nu a fost valid.");
      }

      imageUrl = data.data.link;
    } catch (err) {
      console.error("Eroare la upload Imgur:", err);
      alert("Nu s-a putut încărca imaginea. Încearcă din nou.");
      return;
    }
  }

  // Salvare în Firestore
  try {
    await addDoc(collection(db, "Review"), {
      name,
      message,
      stars,
      imageUrl,
      timestamp: new Date(),
    });

    console.log("Review salvat cu succes.");
    document.getElementById("reviewForm").reset();
  } catch (error) {
    console.error("Eroare la salvarea recenziei:", error);
    alert("Eroare la salvare. Încearcă din nou.");
  }
});

// Afișare recenzii
function loadReviews() {
  const q = query(collection(db, "Review"), orderBy("timestamp", "desc"), limit(3));

  onSnapshot(q, (snapshot) => {
    const reviewsDiv = document.getElementById("reviews");
    reviewsDiv.innerHTML = "";

    snapshot.forEach((doc) => {
      const review = doc.data();
      const div = document.createElement("div");
      div.className = "review";
      div.innerHTML = `
      <div id="dap">${
        review.imageUrl
          ? `<img src="${review.imageUrl}" id="imaguser">`
          : ""
      }
        <strong id="username">${review.name}</strong>
        <p id="usermsg">${review.message}</p>
        
        
        <div class="stars">
    ${"★".repeat(review.stars)}${"☆".repeat(5 - review.stars)}
  </div>
  <br>
  </div>
  <br>
      `;

      reviewsDiv.appendChild(div);
    });
  });
}

loadReviews();

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
  localStorage.setItem('limbaSelectata', limba); // ✅ Salvează în browser
  const paragrafe = document.querySelectorAll(".restaurant-description .body-text, .restaurant-description h1, .semnatura");
  const texte = traduceri[limba];
  paragrafe.forEach((el, i) => {
    el.textContent = texte[i];
  });
}

// ✅ Aplică limba la încărcare
window.addEventListener('DOMContentLoaded', () => {
  const limbaSalvata = localStorage.getItem('limbaSelectata') || 'ro';
  schimbaLimba(limbaSalvata);
});

