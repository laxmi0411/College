// function renderCollegeSection(gridId, collegeData) {
//     const grid = document.getElementById(gridId);
//     if (!grid) return;
//     grid.innerHTML = collegeData.map(collegeCard).join("");
// }

// // For Agriculture page

function renderCollegeSection(gridId, collegeData) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = collegeData.map(collegeCard).join("");
}
document.addEventListener("DOMContentLoaded", () => {
    renderCollegeSection("collegeGrid", colleges);
});