document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully!");

    // Dark mode toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });

    // Change text dynamically
    const changeTextBtn = document.getElementById("change-text-btn");
    const dynamicText = document.getElementById("dynamic-text");

    changeTextBtn.addEventListener("click", function() {
        dynamicText.textContent = "AI is enhancing medical imaging by providing faster and more accurate diagnoses.";
    });
});
