document.getElementById("copy-btn").addEventListener("click", function () {
    let phoneNumber = document.getElementById("phone-number").innerText;
    
    navigator.clipboard.writeText(phoneNumber).then(() => {
        let copiedText = document.getElementById("copied-text");
        copiedText.classList.remove("hidden");

        setTimeout(() => {
            copiedText.classList.add("hidden");
        }, 2000);
    });
});
