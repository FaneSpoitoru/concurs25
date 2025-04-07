import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, limit } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBxhyUYPzt8SE_LFv4A_svzswxnhbSyCmM",
    authDomain: "review-50f0b.firebaseapp.com",
    projectId: "review-50f0b",
    storageBucket: "review-50f0b.firebasestorage.com",
    messagingSenderId: "201117735805",
    appId: "1:201117735805:web:41dde2b142214f42dfca14",
    measurementId: "G-KQKKZF8XFX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('reviewForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;

    try {
        await addDoc(collection(db, "Review"), {
            name: name,
            message: message,
            timestamp: new Date()
        });

        console.log("Recenzia a fost salvată!");
        document.getElementById('reviewForm').reset();
    } catch (error) {
        console.error("Eroare la salvarea recenziei:", error);
        alert("Eroare la salvarea recenziei. Verifică consola.");
    }
});

// 🔹 3. Afișarea recenziilor în timp real
function loadReviews() {
    const q = query(collection(db, "Review"), orderBy("timestamp", "desc"), limit(3)); // 🔹 Afișează doar ultimele 3 recenzii

    onSnapshot(q, (snapshot) => {
        let reviewsDiv = document.getElementById('reviews');
        reviewsDiv.innerHTML = '';

        snapshot.forEach((doc) => {
            let review = doc.data();
            let div = document.createElement('div');
            div.className = 'review';
            div.innerHTML = `<strong>${review.name}</strong><p>${review.message}</p>`;
            reviewsDiv.appendChild(div);
        });
    });
}

function openLightbox(img) {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


loadReviews();


document.querySelectorAll('.galerie img').forEach(img => {
    img.addEventListener('click', () => {
        openLightbox(img);
    });
});


document.getElementById('lightbox').addEventListener('click', closeLightbox);


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