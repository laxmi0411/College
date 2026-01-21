
// 50 colleges data list
function renderCollegeSection(gridId, collegeData) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = collegeData.map(collegeCard).join("");
}
document.addEventListener("DOMContentLoaded", () => {
    renderCollegeSection("collegeGrid", colleges);
});

// form submission
// Get modal elements
// document.addEventListener("DOMContentLoaded", () => {
//     const applyModal = document.getElementById("applyModal");
//     const openButtons = document.querySelectorAll(".applyBtn");
//     const closeModalBtn = document.getElementById("closeModal");
//     const courseSelect = document.getElementById("courseSelect");

//     // Check if modal exists
//     if (!applyModal || !closeModalBtn || !courseSelect) return;

//     // Open modal & set course dynamically
//     openButtons.forEach(btn => {
//         btn.addEventListener("click", () => {
//             console.log("Button clicked");
//             const course = btn.getAttribute("data-course");
//             courseSelect.value = course || "Other"; // default to Other if course not listed
//             applyModal.classList.remove("hidden");
//         });
//     });

//     // Close modal
//     closeModalBtn.addEventListener("click", () => {
//         applyModal.classList.add("hidden");
//     });

//     // Click outside modal to close
//     applyModal.addEventListener("click", (e) => {
//         if (e.target === applyModal) applyModal.classList.add("hidden");
//     });
// });

document.addEventListener("DOMContentLoaded", () => {

    const applyModal = document.getElementById("applyModal");
    const closeModalBtn = document.getElementById("closeModal");
    const courseSelect = document.getElementById("courseSelect");
    const streamInput = document.getElementById("streamInput");

    if (!applyModal || !courseSelect) return;

    // COURSE LIST BY STREAM
    const coursesByStream = {
        Agriculture: [
            "B.Sc Agriculture",
            "M.Sc Agriculture",
            "Horticulture",
            "Diploma in Agriculture"
        ],
        Architecture: [
            "B.Arch",
            "M.Arch",
            "B.Planning",
            "Interior Design"
        ],
        Computer: [
            "BCA",
            "MCA",
            "B.Tech Computer Science"
        ],
        Education: [
            "B.Ed",
            "M.Ed",
            "D.El.Ed",
            "B.A B.Ed",
            "B.Sc B.Ed"
        ],
        Engineering: [
            "B.Tech",
            "M.Tech",
            "Diploma Engineering"
        ],
        Yoga: [
            "B.Sc Yoga",
            "M.Sc Yoga",
            "Diploma in Yoga"
        ],
        Fashion: [
            "Fashion Designing",
            "B.Des",
            "M.Des"
        ],
        Hotel: [
            "Hotel Management",
            "BHM",
            "Diploma in HM"
        ],
        Journalism: [
            "BJMC",
            "MJMC"
        ],
        Law: [
            "BA LLB",
            "BBA LLB",
            "LLB",
            "LLM"
        ],
        Management: [
            "BBA",
            "MBA",
            "PGDM"
        ],
        Pharmacy: [
            "D.Pharm",
            "B.Pharm",
            "M.Pharm"
        ],
        Medical: [
            "MBBS",
            "BDS",
            "BAMS",
            "BHMS"
        ],
        Physiotherapy: [
            "BPT",
            "MPT"
        ]
    };

    // OPEN MODAL (EVENT DELEGATION)
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".applyBtn");
        if (!btn) return;

        const stream = btn.dataset.stream;
        const course = btn.dataset.course;

        // set stream
        if (streamInput) streamInput.value = stream || "";

        // populate dropdown
        courseSelect.innerHTML = "";

        const courses = coursesByStream[stream] || [];
        courses.forEach(c => {
            const opt = document.createElement("option");
            opt.value = c;
            opt.textContent = c;
            courseSelect.appendChild(opt);
        });

        // preselect course
        if (course) courseSelect.value = course;

        applyModal.classList.remove("hidden");
    });

    // CLOSE MODAL
    closeModalBtn?.addEventListener("click", () => {
        applyModal.classList.add("hidden");
    });

    applyModal.addEventListener("click", (e) => {
        if (e.target === applyModal) {
            applyModal.classList.add("hidden");
        }
    });

});
