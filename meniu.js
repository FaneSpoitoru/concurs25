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