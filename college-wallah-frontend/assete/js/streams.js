// document.addEventListener("DOMContentLoaded", () => {
//     const applyModal = document.getElementById("applyModal");
//     const openButtons = document.querySelectorAll(".applyBtn");
//     const closeModalBtn = document.getElementById("closeModal");
//     const courseSelect = document.getElementById("courseSelect");

//     if (!applyModal || !closeModalBtn || !courseSelect) return;

//     openButtons.forEach(btn => {
//         btn.addEventListener("click", () => {
//             console.log("Button clicked");
//             const course = btn.getAttribute("data-course");
//             courseSelect.value = course || "Other";
//             applyModal.classList.remove("hidden");
//         });
//     });

//     closeModalBtn.addEventListener("click", () => {
//         applyModal.classList.add("hidden");
//     });

//     applyModal.addEventListener("click", (e) => {
//         if (e.target === applyModal) applyModal.classList.add("hidden");
//     });
// });
async function submitLead(event) {
    event.preventDefault();

    const form = event.target;

    const data = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value || "",
        course: form.course.value,
        university: form.message?.value || "", // optional mapping
        source: form.source.value || "Website Lead",
        pageurl: window.location.href
    };

    try {
        const res = await fetch("http://localhost:1337/api/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data })
        });

        const result = await res.json();

        if (!res.ok) {
            console.error("Strapi error:", result);
            alert(result.error.message);
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
        document.getElementById("applyModal").classList.add("hidden");

    } catch (err) {
        console.error(err);
        alert("Network error");
    }
}
