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
        <strong id="username>${review.name}</strong>
        <p id="usermsg">${review.message}</p>
        
        
        <div class="stars">
    ${"★".repeat(review.stars)}${"☆".repeat(5 - review.stars)}
  </div>
  <br>
  </div>
      `;

      reviewsDiv.appendChild(div);
    });
  });
}

loadReviews();
