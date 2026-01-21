document.addEventListener("DOMContentLoaded", () => {
    const applyModal = document.getElementById("applyModal");
    const openButtons = document.querySelectorAll(".applyBtn");
    const closeModalBtn = document.getElementById("closeModal");
    const courseSelect = document.getElementById("courseSelect");

    if (!applyModal || !closeModalBtn || !courseSelect) return;

    openButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Button clicked");
            const course = btn.getAttribute("data-course");
            courseSelect.value = course || "Other";
            applyModal.classList.remove("hidden");
        });
    });

    closeModalBtn.addEventListener("click", () => {
        applyModal.classList.add("hidden");
    });

    applyModal.addEventListener("click", (e) => {
        if (e.target === applyModal) applyModal.classList.add("hidden");
    });
});
